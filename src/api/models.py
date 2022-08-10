from flask_sqlalchemy import SQLAlchemy
import datetime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class Users(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(50), unique=False, nullable=False)
    name = db.Column(db.String(100), unique=False, nullable=False)
    lastname = db.Column(db.String(100), unique=False, nullable=False)
    lawyer_identification = db.Column(db.String(100), unique=False, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow() )

    def __repr__(self):
        return f'<Users {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password,
            "name": self.name,
            "lastname": self.lastname,
            "lawyer_identification": self.lawyer_identification,
            "delete":self.delete
            # do not serialize the password, its a security breach
        }

class Clients(db.Model):
    __tablename__='clients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    first_lastname = db.Column(db.String(120), unique=True, nullable=False)
    second_lastname = db.Column(db.String(120), unique=True, nullable=False)
    lawyer_id = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Clients {self.name},{self.first_lastname},{self.second_lastname},{self.lawyer_id},{self.is_active},{self.delete}>'

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
    __tablename__='phone_number'
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    phone_number = db.Column(db.String(50), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Phone_number {self.id}, {self.client_id}, {self.phone_number}, {self.delete}>'

    def serialize(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "phone_number": self.phone_number,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Address(db.Model):
    __tablename__='address'
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    address = db.Column(db.String(100), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    db.Column(create_at = db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Address {self.id}, {self.client_id}, {self.address}, {self.delete}>'

    def serialize(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "address": self.address,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Email_address(db.Model):
    __tablename__='email_address'
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    email_address = db.Column(db.String(100), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Email_address {self.id}, {self.client_id}, {self.email_address}, {self.delete}>'

    def serialize(self):
        return {
            "id": self.id,
            "client_id": self.client_id,
            "email_address": self.email_address,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Notes(db.Model):
    __tablename__='notes'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'),nullable=False)
    user_id_relation= relationship(Users,primaryjoin=user_id==Users.id)
    data = db.Column(db.String(500), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Notes {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.client_id,
            "data": self.data,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Case_status(db.Model):
    __tablename__='case_status'
    id = db.Column(db.Integer, primary_key=True)
    Case_status = db.Column(db.String(50), unique=True, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Case_status {self.id}, {self.Case_status}, {self.delete}>'

    def serialize(self):
        return {
            "id": self.id,
            "case_status": self.Case_status,
            # do not serialize the password, its a security breach
        }


class Files(db.Model):
    __tablename__='files'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), unique=True, nullable=False)
    url = db.Column(db.String(500), unique=True, nullable=False)
    Case_udates_id = db.Column(db.Integer, unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Files {self.id}, {self.name}, {self.url}, {self.Case_udates_id}, {self.delete}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "url": self.url,
            "Case_udates_id": self.Case_udates_id,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }

class Cases(db.Model):
    __tablename__='cases'
    id = db.Column(db.Integer, primary_key=True)
    exp_number = db.Column(db.Integer, unique=True, nullable=False)
    description = db.Column(db.String(250), unique=True, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'),nullable=False)
    client_id_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    lawyer_id = db.Column(db.Integer, db.ForeignKey('users.id'),nullable=False)
    lawyer_id_relation= relationship(Users,primaryjoin=lawyer_id==Users.id)
    status_id = db.Column(db.Integer, db.ForeignKey('case_status.id'),nullable=False)
    status_id_relation= relationship(Case_status,primaryjoin=status_id==Case_status.id)
    cost = db.Column(db.Integer, unique=True, nullable=False)
    init_date = db.Column(db.String(50), unique=True, nullable=False)
    end_date = db.Column(db.String(50), unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Cases {self.id}, {self.exp_number}, {self.description},{self.client_id},{self.lawyer_id},{self.status_id},{self.cost},{self.init_date},{self.end_date}>'

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
    __tablename__='case_updates'
    id = db.Column(db.Integer, primary_key=True)
    case_id = db.Column(db.Integer, db.ForeignKey('cases.id'),nullable=False)
    case_id_relation= relationship(Cases,primaryjoin=case_id==Cases.id)
    description = db.Column(db.String(500), unique=True, nullable=False)
    file_id = db.Column(db.Integer, unique=True, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'<Case_updates {self.id}, {self.case_id}, {self.delete}>'

    def serialize(self):
        return {
            "id": self.id,
            "case_id": sefl.case_id,
            "description": self.description,
            "file_id": self.file_id,
            "delete": self.delete,
            # do not serialize the password, its a security breach
        }