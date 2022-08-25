
from flask_sqlalchemy import SQLAlchemy
import datetime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class Users(db.Model):
    __tablename__='Users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    lastname = db.Column(db.String(100), unique=False, nullable=False)
    lawyer_identification = db.Column(db.String(100), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False,default=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow() )

    def __repr__(self):
        return f'User ID:{self.id} Username:{self.name}'

    def serialize(self):
        return {
            "ID": self.id,
            'Name':self.name,
            'Lastname':self.lastname,
            "Email": self.email,
            'Active':self.is_active,
            'Create_at':self.create_at            
        }

class Clients(db.Model):
    __tablename__='Clients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    first_lastname = db.Column(db.String(120), unique=False, nullable=False)
    second_lastname = db.Column(db.String(120), unique=False, nullable=False)
    lawyer_id = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False,default=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Customer:{self.name},{self.first_lastname}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "first_lastname": self.first_lastname,
            "second_lastname": self.second_lastname,
            "lawyer_id": self.lawyer_id,
            "is_active": self.is_active,
            "delete": self.delete
            # do not serialize the password, its a security breach
        }

class Phone_number(db.Model):
    __tablename__='Phone_number'
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    phone_number = db.Column(db.String(50), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Phone number:{self.phone_number}'

    def serialize(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "phone_number": self.phone_number,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Address(db.Model):
    __tablename__='Address'
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    address = db.Column(db.String(100), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at=db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Address:{self.address}'

    def serialize(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "address": self.address,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Email_address(db.Model):
    __tablename__='Email_address'
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    email_address = db.Column(db.String(100), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Email_address:{self.email_address}'

    def serialize(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "email_address": self.email_address,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Notes(db.Model):
    __tablename__='Notes'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'),nullable=False)
    user_id_relation= relationship(Users,primaryjoin=user_id==Users.id)
    data = db.Column(db.String(500), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Note:{self.data}'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.client_id,
            "data": self.data,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Case_status(db.Model):
    __tablename__='Case_status'
    id = db.Column(db.Integer, primary_key=True)
    Case_status = db.Column(db.String(50), unique=True, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Case_status {self.id}>'


    def serialize(self):
        return {
            "id": self.id,
            "case_status": self.Case_status,
            # do not serialize the password, its a security breach
        }
        
class Cases(db.Model):
    __tablename__='Cases'
    id = db.Column(db.Integer, primary_key=True)
    exp_number = db.Column(db.Integer, unique=True, nullable=False)
    description = db.Column(db.String(250), unique=True, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    lawyer_id = db.Column(db.Integer, db.ForeignKey('Users.id'),nullable=False)
    lawyer_id_relation= relationship(Users,primaryjoin=lawyer_id==Users.id)
    status_id = db.Column(db.Integer, db.ForeignKey('Case_status.id'),nullable=False)
    status_id_relation= relationship(Case_status,primaryjoin=status_id==Case_status.id)
    cost = db.Column(db.Integer, unique=True, nullable=False)
    init_date = db.Column(db.String(50), unique=True, nullable=False)
    end_date = db.Column(db.String(50), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False,default=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Cases {self.exp_number}, {self.description},{self.client_id},{self.lawyer_id}'

    def serialize(self):
        return {
            "id": self.id,
            "exp_number": self.exp_number,
            "description": self.description,
            "client_id": self.client_id,
            "lawyer_id": self.lawyer_id,
            "status_id": self.status_id,
            "cost": self.cost,
            "init_date": self.init_date,
            "end_date": self.end_date,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }


class Case_updates(db.Model):
    __tablename__='Case_updates'
    id = db.Column(db.Integer, primary_key=True)
    case_id = db.Column(db.Integer, db.ForeignKey('Cases.id'),nullable=False)
    case_id_relation= relationship(Cases,primaryjoin=case_id==Cases.id)
    title = db.Column(db.String(500), unique=True, nullable=False)
    description = db.Column(db.String(5000), unique=True, nullable=False)
    file_id = db.Column(db.Integer, unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Case update: {self.description}'

    def serialize(self):
        return {
            "id": self.id,
            "case_id": self.case_id,
            "description": self.description,
            "file_id": self.file_id,
            "delete": self.delete,

            # do not serialize the password, its a security breach
        }

class Files(db.Model):
    __tablename__='Files'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    url = db.Column(db.String(500), unique=True, nullable=False)
    Case_updates_id = db.Column(db.Integer, db.ForeignKey('Case_updates.id'),nullable=False)
    Case_updates_id_relation= relationship(Case_updates,primaryjoin=Case_updates_id==Case_updates.id)    
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Files {self.id}, {self.name}, {self.url}, {self.Case_updates_id}, {self.delete}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url": self.url,
            "Case_updates_id": self.Case_updates_id,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

        