"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint, send_file,render_template, make_response
from api.models import db, Users, Clients, Files, Notes,Cases, Case_updates, Phone_number, Address, Email_address
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
import smtplib
from cloudinary.uploader import upload
import os
from os import path
from pathlib import Path
import random
import string
from email.mime.text import MIMEText
from flask_bcrypt import generate_password_hash, check_password_hash
from socket import gaierror

api = Blueprint('api', __name__)
# instancia del objeto Flask
app = Flask(__name__)

@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

@api.route("/vcode", methods=["POST"])
def mfa():
    email = request.json.get("email", None)
    code = request.json.get("code", None)
    user = Users.query.filter_by(email=email).first()
    if user is None:
        return jsonify({
            "msg": "Email Error"
        }), 401
    is_correct = check_password_hash(user.password, code)
    if not is_correct:
        return jsonify({"msg": "Wrong verification code"}), 401
    if is_correct:
        access_token = create_access_token(identity=email)
        response_body = {
            'msg': 'Set new password',
        # 'token': access_token,
        }
        return jsonify(response_body), 200

def send_email(msg, email):
    print(msg)
    sender = "info@dropcas.es"
    receiver = email

    try:
        with smtplib.SMTP("send.smtp.mailtrap.io", 2525) as server:
            server.starttls()
            server.login("api", "3973fe61601f535b62b2ea8a05343106")
            print(1)
            server.sendmail(sender, receiver, msg.as_string())
            print("Mail sent")
        return jsonify("msg:Mail sent")

    except (gaierror, ConnectionRefusedError):
        print('Failed to connect to the server. Bad connection settings?')
    except smtplib.SMTPServerDisconnected:
        print('Failed to connect to the server. Wrong user/password?')
    except smtplib.SMTPException as e:
        print('SMTP error occurred: ' + str(e))

"""def send_email(msg, email):
    print(msg)
    sender = "info@dropcas.es"
    receiver = email

    try:
        with smtplib.SMTP("smtp.mailtrap.io", 2525) as server:
            server.starttls()
            server.login("8c7f3d9c31cc96", "97d8ee24d57c1d")
            print(1)
            server.sendmail(sender, receiver, msg.as_string())
            print("Mail sent")
        return jsonify("msg:Mail sent")

    except (gaierror, ConnectionRefusedError):
        print('Failed to connect to the server. Bad connection settings?')
    except smtplib.SMTPServerDisconnected:
        print('Failed to connect to the server. Wrong user/password?')
    except smtplib.SMTPException as e:
        print('SMTP error occurred: ' + str(e))"""


@api.route('/')
def sitemap():
    return generate_sitemap(app)


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = Users.query.filter_by(email=email).first()
    if user is None:
        return jsonify({
            "status": "invalid_credentials",
            "msg": "You are not a registered user,sign up to continue or go away!!!"
        }), 400
    is_correct = check_password_hash(user.password, password)
    if not is_correct:
        return jsonify({"status": "invalid_credentials","msg": "Bad username or password"}), 400
    if is_correct:
        access_token = create_access_token(identity=email)
        response_body = {
            'msg': 'Welcome to Dropcases',
            'token': access_token,
            'user': user.serialize()
        }
        return jsonify(response_body), 200

"""@api.route("/validate", methods=["GET"])
@jwt_required()
def validate_token():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = Users.query.filter_by(email=current_user).first()
    response = {
        'logged_in_as': current_user,
        'msg': 'The token is valid.',
        'user': user.serialize()
    }
    return jsonify(response), 200"""


@api.route("/auth", methods=["GET"])
@jwt_required()
def validate_token():

    user = get_jwt_identity()
    validate_user = User.query.filter_by(email=user).first()
    response_body = {
        'logged_in_as': validate_user,
        'msg': 'The token is valid.',
        'user': user.serialize()
    }
    return jsonify(response_body), 200


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify({
        "logged_in_as": current_user,
        "msg": "Access Granted to Private route"
    }), 200


@api.route('/user/<int:id>', methods=['GET'])
@jwt_required()
def single_user(id):
    users = Users.query.get(id)
    single_user = users.serialize()
    return jsonify(single_user), 200
    
@api.route('/client/<int:id>', methods=['GET'])
# @jwt_required()
def single_client(id):
    client_id = id
    print(f"ID ES {client_id}")
    single_client = Clients.query.filter_by(id=client_id).first()
    client_emails = Email_address.query.filter_by(id=client_id)
    client_phones = Phone_number.query.filter_by(id=client_id)
    client_address = Address.query.filter_by(id=client_id)
    all_emails = list(map(lambda x: x.serialize(), client_emails))
    all_phones = list(map(lambda x: x.serialize(), client_phones))
    all_address = list(map(lambda x: x.serialize(), client_address))

    return jsonify({
        'user': single_client.serialize(),
        'contact': {
            "email": all_emails,
            "phone": all_phones,
            "address": all_address
        }
    }),200

@api.route('/case/<int:id>', methods=['GET'])
# @jwt_required()
def single_case(id):
    case = Cases.query.get(id)
    single_case = case.serialize()
    return jsonify(single_case), 200


@api.route('/user', methods=['GET', 'POST', 'PUT'])
def users():

    if request.method == 'GET':

        users = Users.query.all()
        all_users = list(map(lambda x: x.serialize(), users))
        response_body = {
            "msg": "Users list",
            "Users": all_users
        }
        return jsonify(response_body), 200
        db.session.commit()

    if request.method == 'PUT':
        if 'email' not in request.json:
            return jsonify({"msg": "Fill email fields please"}), 400

        email = request.json['email']
        user = Users.query.filter_by(email=email).first()

        if 'password' in request.json:
            password = request.json['password']
            user.password = password

        if 'name' in request.json:
            name = request.json['name']
            user.name = name

        if 'lastname' in request.json:
            lastname = request.json['lastname']
            user.lastname = lastname

        if 'is_active' in request.json:
            is_active = request.json['is_active']
            user.is_active = is_active

        response_body = {
            'msg': 'User successfully updated.',
            'user': user.serialize()
        }
        db.session.commit()
        return jsonify(response_body), 200

    if request.method == 'POST':
        body = request.json
        email = request.json.get('email')
        password = request.json.get('password')
        lawyer_identification = request.json.get('lawyer_identification')
        name = request.json.get('name')
        lastname = request.json.get('lastname')
        user = Users.query.filter_by(email=email).first()
        

        if body is None:
            return "The request body is null", 400
        if not email:
            return 'You need to specify the email', 400
        if user:
            return jsonify({
                "status":"user_duplicate",
                "msg":"Email already exist,please login"
            }),401
        if not password:
            return 'You need to enter a password', 400
        if not lawyer_identification:
            return 'You need to enter your lawyer ID', 400
        if not name:
            return 'You need to enter your name', 400
        if not lastname:
            return 'You need to enter your lastname', 400
       
        
        pw_hash = generate_password_hash(password, 10).decode('utf-8')
        user = Users(email=email, name=name, lastname=lastname,
                     lawyer_identification=lawyer_identification, password=pw_hash)
        db.session.add(user)
        db.session.commit()
        try:
            message = '''\
                Thank you for registering! You can sign in by visiting the link below.
                <br/>
                <br/>
                <br/>
                <br/>
                Thanks,
                <br/>
                Dropcases
                <br/>
            '''.format("")

            msg = MIMEText(message, 'html')
            msg['Subject'] = "Welcome"
            msg['From'] = "info@dropcas.es"
            msg['To'] = email
            send_email(msg, email)

        except Exception as e:
            return jsonify({"msg":"unable to send confirmation email"}),400
        response_body = {
            'msg': 'Thank you! Your account has been added successfully. Please sign in.',
            'user': user.serialize()
        }
        return jsonify(response_body),200

@api.route('/client', methods=['GET', 'POST', 'PUT'])
#@jwt_required()

def customers():
    if request.method == 'GET':
        print(request.args.get('userid'))
        user_id = request.args.get('userid')
        customers = Clients.query.filter_by(users_id=user_id)
        all_customers = list(map(lambda x: x.serialize(), customers))
        response_body = {
            "msg": "Customers list",
            "clients": all_customers
        }
        return jsonify(response_body), 200

    if request.method == 'PUT':
        if 'id' not in request.json:
            return jsonify({"msg": "User ID missing"}), 400

        id = request.json['id']
        customer = Clients.query.filter_by(id=id).first()

        if 'name' in request.json:
            name = request.json['name']
            customer.name = name

        if 'first_lastname' in request.json:
            first_lastname = request.json['first_lastname']
            customer.first_lastname = first_lastname

        if 'second_lastname' in request.json:
            second_lastname = request.json['second_lastname']
            customer.second_lastname = second_lastname

        if 'is_active' in request.json:
            is_active = request.json['is_active']
            customer.is_active = is_active

        if 'lawyer_id' in request.json:
            lawyer_id = request.json['lawyer_id']
            customer.lawyer_id = lawyer_id

        if 'delete' in request.json:
            delete = request.json['delete']
            customer.delete = delete
        response_body = {
            'msg': 'Customer successfully updated.',
            'Clients': customer.serialize()
        }
        db.session.commit()
        return jsonify(response_body), 200

    elif request.method == 'POST':
        body = request.json
        name = request.json.get('name')
        dni = request.json.get('dni')
        lawyer_id = request.json.get('lawyer_id')
        is_active = request.json.get('is_active')
        first_lastname = request.json.get('first_lastname')
        second_lastname = request.json.get('second_lastname')

        if body is None:
            return "The request body is null", 400
        if not name:
            return 'You need to specify customer', 400
        clients = Clients(name=name, users_id=lawyer_id, is_active=is_active,first_lastname=first_lastname, second_lastname=second_lastname, dni=dni)
        db.session.add(clients)
        db.session.commit()
        response_body = {
            'msg': 'Customer has been created successfully.',
            'client': clients.serialize()
         }
        return jsonify(response_body), 200

@api.route('/status', methods=['GET', 'POST', 'PUT'])
# @jwt_required()
def case_status():
    if request.method == 'POST':
        body = request.json
        description = request.json.get('description')
        if body is None:
            return "The request body is null", 400
        if not description:
            return 'You need to specify a case status to be added', 400
        case_status = Case_status(Case_status=description)
        db.session.add(case_status)
        db.session.commit()
        response_body = {
            'msg': ' A new case staturs has been created successfully.',
            'user': case_status.serialize()
        }
        return jsonify(response_body), 200

@api.route('/cases', methods=['GET', 'POST', 'PUT'])
# @jwt_required()
def cases():
    if request.method == 'POST':
        body = request.json
        title= request.json.get('title')
        exp_number = request.json.get('exp_number')
        description = request.json.get('description')
        client_id = request.json.get('client_id')
        lawyer_id=request.json.get('lawyer_id')
        cost=request.json.get('cost')
        init_date=request.json.get('init_date')
        end_date=request.json.get('end_date')
       
        if body is None:
            return "The request body is null", 400
        if not client_id:
            return 'You need to specify the numero de cliente', 400
        cases = Cases(title=title,exp_number=exp_number,description=description,client_id=client_id,lawyer_id=lawyer_id,cost=cost,init_date=init_date,end_date=end_date)
        db.session.add(cases)
        db.session.commit()
        response_body = {
        'msg': ' A new case has been created successfully.',
        'case': cases.serialize()
        }
        return jsonify(response_body), 200
        
    if request.method == 'GET':
        user_id = request.args.get('userid')
        cases = Cases.query.filter_by(lawyer_id=user_id)
        all_cases = list(map(lambda x: x.serialize(),cases))
        print(all_cases)
        response_body = {
            "msg": "All cases",
            "Cases": all_cases
        }
        return jsonify(response_body), 200
        db.session.commit()
    elif request.method == 'PUT':
        if 'id' not in request.json:
            return jsonify({"msg": "Case ID missing"}), 400

        id = request.json['id']
        case = Cases.query.filter_by(id=id).first()
       
        if 'description' in request.json:
            description = request.json['description']
            case.description = description
            

        if 'cost' in request.json:
            cost = request.json['cost']
            case.cost = cost

        if 'end_date' in request.json:
            end_date = request.json['end_date']
            case.end_date = end_date

        if 'lawyer_id' in request.json:
            lawyer_id = request.json['lawyer_id']
            case.lawyer_id = lawyer_id

        if 'status_id' in request.json:
            status_id = request.json['status_id']
            case.status_id = status_id

        if 'delete' in request.json:
            delete = request.json['delete']
            case.delete = delete

        
        response_body = {
            'msg': 'Case successfully updated.',
            'Case_updated': case.serialize()
        }
        db.session.commit()
        return jsonify(response_body), 200

@api.route('/case-update', methods=['GET', 'POST'])
# @jwt_required()
def case_update():
    if request.method == "POST":
        title= request.json.get('title')
        description = request.json.get('description')
        case_id = request.json.get('case_id')
        delete = False

        case_update = Case_updates(case_id=case_id, title=title, description=description,delete=delete)

        db.session.add(case_update)
        db.session.commit()

        return jsonify(case_update.serialize()), 200


@api.route("/reset", methods=["POST","PUT"])
def update_password():
    if request.method == "POST":
       
        email = request.json.get("email")

        if not email:
            return jsonify({"msg": "Missing email in request."}), 400

        user = Users.query.filter_by(email=email).first()

        if user:
            new_password = ''.join(str(random.randint(0,9))for i in range(6))
        # new_verification_code_hashed
            pw_hash = generate_password_hash(new_password, 10).decode('utf-8')
            user.password = pw_hash
            db.session.commit()

            response_body = {
                "msg": "Success. An email will be sent to your account with your verfication code.",
                "email":email
            }

            try:
                message = '''\
                    A reset request was sent to our system. Please use the following code to sign in:
                    <br/>
                    <br/>
                    <br/>
                    {0}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    Thanks,
                    <br/>
                    Dropcases
                
                '''.format(new_password)

                msg = MIMEText(message, 'html')
                msg['Subject'] = "Password Reset Request"
                msg['From'] = "info@dropcas.es"
                msg['To'] = email

                send_email(msg, email)
            except Exception as e:
                print(e)
                return jsonify({"msg": "Unable to send reset email."}), 400

            return jsonify(response_body), 200
        else:
            return jsonify({"msg": "Email not registered"}), 400
    if request.method == "PUT":
        email = request.json.get("email", None)
        new_password = request.json.get('new_password',None)
        user = Users.query.filter_by(email=email).first()
        
        if new_password is None:
            return jsonify({
            "msg": "Please fill new password"
            }), 401

        if 'new_password' in request.json:
            new_password = request.json['new_password']
            pw_hash = generate_password_hash(new_password, 10).decode('utf-8')
            user.password = pw_hash
        response_body = {
            'msg': 'New password stored succesfully',
            'user': user.serialize()
    }
    db.session.commit()
    return jsonify(response_body), 200

@api.route('/upload', methods=['POST'])
def upload_files():

    file_url = request.files.get('file')
    print(file_url)
    result = upload(file_url)
    url = result["secure_url"]

    case_update_id = request.form.get('case_update_id')
    file_name = request.form.get('name')

    files = Files(url=url,Case_updates_id=case_update_id,name=file_name)
    db.session.add(files)
    db.session.commit()

    payload = {
        'msg': 'Files uploaded.',
        'Files': files.serialize()
    }
    return jsonify(payload),200

@api.route('/allfiles', methods=['GET'])
#@jwt_required()
def files():
    if request.method == 'GET':
        files = Files.query.all()
        files = list(map(lambda x: x.serialize(), files))
        all_files = files[-6:]
        response_body = {
            "msg": "This is total Files",
            "Files": all_files
        }
        return jsonify(response_body), 200
        db.session.commit()

@api.route('/files', methods=['GET'])
@jwt_required()
def files_by_User():

    if request.method == 'GET':

        case_id = request.json['user_id']
        user = Users.query.filter_by(email=email).first()
        files = Files.query.all()
        all_files = list(map(lambda x: x.serialize(), files))
        if all_files:
            response_body = {
                "msg": "This is total Files",
                "Files": all_files
            }
            return jsonify(response_body), 200
        else:
            return jsonify("No hay documentos almacenados"), 400
        db.session.commit()

@api.route('/file/<filename>', methods=['GET','DELETE'])
# @jwt_required()
def file(filename):
    if request.method == 'GET':
        image_attach = send_file(f'/workspace/dropcases/public/client_files/carlos.lukass28@gmail.com/{filename}')
        return (image_attach), 200

    if request.method == 'DELETE':
        if 'id' not in request.json:
            return jsonify({"msg": "Id is a required field"}), 400

        id = request.json['id']
        file = Files.query.filter_by(id=id).first()
        file.delete = True
        
        print(file)
        response_body = {
            'msg': 'File successfully updated.',
            'Clients': file.serialize()
        }
        db.session.commit()
        return jsonify(response_body), 200

@api.route('/notes', methods=['POST','GET','PUT','DELETE'])
#@jwt_required()
def notes():
    if request.method == 'POST':
        body = request.json
        print(body)
        user_id = request.json.get('user_id')
        data = request.json.get('data')
        delete = request.json.get('delete')
        if body is None:
            return "The request body is null", 400
        if not data:
            return 'You need write something', 400
        notes = Notes(user_id=user_id,data=data,delete=delete)
        db.session.add(notes)
        db.session.commit()
        response_body = {
            'msg': ' A new note has been created successfully.',
            'Notes': notes.serialize()
        }
        return jsonify(response_body), 200

    if request.method == 'GET':
        notes = Notes.query.all()
        all_notes = list(map(lambda x: x.serialize(), notes))
        db.session.commit()
        response_body = {
            "msg": "This is total notes",
            "Notes": all_notes
        }
        return jsonify(response_body), 200
    
    if request.method == 'PUT':
        id = request.json['id']
        data = request.json.get('data')

        if id is None:
            return "The request id is null", 400
        if data is None:
            return "The request data is null", 400
        note = Notes.query.filter_by(id=id).first()
        note.data = data                                                                                          
        db.session.commit()
        response_body = {
            'msg': ' the note has been update successfully.',
            'Notes': note.serialize()
        }
        return jsonify(response_body), 200
        
    if request.method == 'DELETE':
        id = request.json['id']

        if id is None:
            return "The request body is null", 400

        note = Notes.query.filter_by(id=id).first()
        note.delete = True                                                                                          
        db.session.commit()
        response_body = {
            'msg': 'The note successfully deleted.',
            'Notes': note.serialize()
        }        
        return jsonify(response_body), 200

@api.route('/usercontact', methods=['POST','GET','PUT''DELETE'])
#@jwt_required()
def usercontact():
    if request.method == 'POST':
        d_client_id = request.json.get('client_id')
        d_phone_one = request.json.get('phone_one')
        d_phone_two = request.json.get('phone_two')
        d_email_one = request.json.get('email_one')
        d_email_two = request.json.get('email_two')
        d_address_one = request.json.get('address_one')
        d_address_two = request.json.get('address_two')

        phone_one = Phone_number(client_id = d_client_id, phone_number = d_phone_one, delete=False)
        phone_two = Phone_number(client_id = d_client_id, phone_number = d_phone_two, delete=False)
        address_one = Address(client_id = d_client_id, address = d_address_one, delete=False)
        address_two = Address(client_id = d_client_id, address = d_address_two, delete=False)
        email_one = Email_address(client_id = d_client_id, email_address = d_email_one, delete=False)
        email_two = Email_address(client_id = d_client_id, email_address = d_email_two, delete=False)
        db.session.add_all([phone_one,phone_two,email_one,email_two,address_one,address_two])
        db.session.commit()
        response_body = {
            'msg': 'client create!',
            'usercontact': {
                'phone_one': d_phone_one,
                'phone_two': d_phone_two,
                'address_one': d_address_one,
                'address_two': d_address_two,
                'email_one': d_email_one,
                'email_two': d_email_two,
            }
        }
        return jsonify(response_body), 200
        
if __name__ == '__main__':
 # Iniciamos la aplicación
     app.run(debug=True) 