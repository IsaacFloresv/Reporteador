"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Clients
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


@api.route('/')
def sitemap():
    return generate_sitemap(app)


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({
            "msg": "You are not a registered user,sign up to continue or go away!!!"
        }), 401

    if password != user.password:
        return jsonify({"msg": "Wrong password"}), 401

    response_body = {
        'msg': 'Welcome to Dropcase',
        'user': user.serialize()
    }
    return jsonify(response_body), 200

@api.route('/user', methods=['GET','POST','PUT'])
def users():

    if request.method == 'GET':
        users = User.query.all()
        all_users = list(map(lambda x: x.serialize(), users))
        response_body = {
            "msg": "Users list",
            "Users": all_users
        }
        return jsonify(response_body), 200
        db.session.commit()

    if request.method=='POST':
        if 'email' not in request.json:
            return jsonify({"msg": "Fill email fields please"}), 400

        email = request.json['email']
        user = User.query.filter_by(email=email).first()

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
    elif request.method=='PUT':
        body = request.json
        email = request.json.get('email')
        name = request.json.get('name')
        lastname = request.json.get('lastname')
        lawyer_id = request.json.get('lawyer ID')
        password = request.json.get('password')

        if body is None:
            return "The request body is null", 400
        if not email:
            return 'You need to specify the email', 400
        if not password:
            return 'You need to enter a password', 400

        user = User(email=email, name=name, lastname=lastname,
                    lawyer_id=lawyer_id, password=password,)

        db.session.add(user)
        db.session.commit()

        response_body = {
            'msg': 'Thank you! Your account has been added successfully. Please sign in.',
            'user': user.serialize()
        }

        return jsonify(response_body), 200

@api.route('/clients', methods=['GET','POST','PUT'])
def customers():
    if request.method == 'GET':
        customers = Clients.query.all()
        all_customers = list(map(lambda x: x.serialize(), customers))
        response_body = {
            "msg": "Customers list",
            "Customer": all_customers
        }
        return jsonify(response_body), 200
        db.session.commit()
    elif request.method == 'PUT':
        if 'id' not in request.json:
            return jsonify({"msg": "User ID missing"}), 400

        id = request.json['id']
        customer = Clients.query.filter_by(id=id).first()
        print(customer)
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

        response_body = {
            'msg': 'Customer successfully updated.',
            'Clients': customer.serialize()
        }
        db.session.commit()
        return jsonify(response_body), 200
    elif request.method=='POST':
        body = request.json
        email = request.json.get('email')
        name = request.json.get('name')
        lawyer_id = request.json.get('lawyer_id')
        is_active = request.json.get('is_active')
        first_lastname = request.json.get('first_lastname')
        second_lastname = request.json.get('second_lastname')

        if body is None:
            return "The request body is null", 400
        if not email:
            return 'You need to specify the email', 400
        clients = Clients(email=email, name=name, lawyer_id=lawyer_id, is_active=is_active,
                        first_lastname=first_lastname, second_lastname=second_lastname)
        db.session.add(clients)
        db.session.commit()
        response_body = {
        'msg': 'Customer has been created successfully.',
        'user': clients.serialize()
        }
        return jsonify(response_body), 200


@api.route('/cases', methods=['GET','POST','PUT'])
def cases():
    if request.method=='POST':
        body = request.json
        email = request.json.get('email')
        name = request.json.get('name')
        lawyer_id = request.json.get('lawyer_id')
        is_active = request.json.get('is_active')
        first_lastname = request.json.get('first_lastname')
        second_lastname = request.json.get('second_lastname')

        if body is None:
            return "The request body is null", 400
        if not email:
            return 'You need to specify the email', 400
        clients = Clients(email=email, name=name, lawyer_id=lawyer_id, is_active=is_active,
                        first_lastname=first_lastname, second_lastname=second_lastname)
        db.session.add(clients)
        db.session.commit()
        response_body = {
        'msg': 'Customer has been created successfully.',
        'user': clients.serialize()
        }
        return jsonify(response_body), 200
