from flask_sqlalchemy import SQLAlchemy 
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    lastname= db.Column(db.String(80), nullable=False)
    lawyer_id= db.Column(db.String(20),unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    create_at=db.Column(db.DateTime,default=datetime.utcnow())

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "ID": self.id,
            'Name':self.name,
            'Lastname':self.lastname,
            "Email": self.email,
            'Active':self.is_active,
            'Created at':self.create_at            # do not serialize the password, its a security breach
        }

class Clients(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120),nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_lastname = db.Column(db.String(120),nullable=False)
    second_lastname = db.Column(db.String(120),nullable=False)
    lawyer_id = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.utcnow())
    
    def __repr__(self):
        return f'<Clients {self.email}>'
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "first_lastname": self.first_lastname,
            "second_lastname": self.second_lastname,
            "lawyer_id": self.lawyer_id,
            "is_active": self.is_active,
            # do not serialize the password, its a security breach
        }
        