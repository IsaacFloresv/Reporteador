
from flask_sqlalchemy import SQLAlchemy
import datetime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

class tipo_id(db.Model):
    __tablename__='tipo_id'
    id = db.Column(db.Integer, primary_key=True)
    cod_t_id = db.Column(db.string(20), unique=False, nullable=False)
    categoria = db.Column(db.String(20), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'tipo_id:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod_t_id": self.cod_t_id,
            "categoria": self.categoria,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class estado_caso(db.Model):
    __tablename__='estado_caso'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.string(20), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'estado_caso:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod": self.cod_t_id,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class caract_esp(db.Model):
    __tablename__='caract_esp'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.string(20), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'caract_esp:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod": self.cod_t_id,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class email(db.Model):
    __tablename__='email'
    id = db.Column(db.Integer, primary_key=True)
    id_person = db.Column(db.Integer, primary_key=True)
    id_person_relation= relationship(registro_tse,primaryjoin=id==Clients.id)
    cod = db.Column(db.string(20), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'email:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod": self.cod_t_id,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class phones(db.Model):
    __tablename__='phones'
    id = db.Column(db.Integer, primary_key=True)
    id_origen = db.Column(db.string(50), unique=False, nullable=False)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    phone = db.Column(db.String(50), unique=False, nullable=False)
    
    def __repr__(self):
        return f'phones:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_origen": self.id_origen,
            "cod": self.cod,
            "phone": self.phone,
            # do not serialize the password, its a security breach
        }

class district(db.Model):
    __tablename__='district'
    id = db.Column(db.Integer, primary_key=True)
    id_cantones = db.Column(db.string(50), unique=False, nullable=False)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(50), unique=False, nullable=False)
    
    def __repr__(self):
        return f'district:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_cantones": self.id_cantones,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class cantones(db.Model):
    __tablename__='cantones'
    id = db.Column(db.Integer, primary_key=True)
    id_provincias = db.Column(db.string(50), unique=False, nullable=False)
    cod = db.Column(db.String(200), unique=False, nullable=False)
    descrip = db.Column(db.String(50), unique=False, nullable=False)
    
    def __repr__(self):
        return f'cantones:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_provincias": self.id_provincias,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class provincias(db.Model):
    __tablename__='provincias'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.String(200), unique=False, nullable=False)
    descrip = db.Column(db.String(50), unique=False, nullable=False)
    
    def __repr__(self):
        return f'provincias:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class companies(db.Model):
    __tablename__='companies'
    id = db.Column(db.Integer, primary_key=True)
    id_companie = db.Column(db.Integer, unique=False, nullable=False)
    name = db.Column(db.String(300), unique=False, nullable=False)
    razon_social = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'companies:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_companie": self.id_companie,
            "name": self.name,
            "razon_social": self.razon_social,
            # do not serialize the password, its a security breach
        }

class person(db.Model):
    __tablename__='person'
    id = db.Column(db.Integer, primary_key=True)
    id_person = db.Column(db.Integer, unique=False, nullable=False)
    name = db.Column(db.String(50), unique=False, nullable=False)
    apell_1 = db.Column(db.String(50), unique=False, nullable=False)
    apell_2 = db.Column(db.String(50), unique=False, nullable=False)
    
    def __repr__(self):
        return f'person:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_person": self.id_person,
            "name": self.name,
            "apell_1": self.apell_1,
            "apell_2": self.apell_2,
            # do not serialize the password, its a security breach
        }

class asunto(db.Model):
    __tablename__='asunto'
    id = db.Column(db.Integer, primary_key=True)
    id_materia = db.Column(db.Integer, unique=False, nullable=False)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'asunto:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_materia": self.id_materia,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class materia(db.Model):
    __tablename__='materia'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'materia:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class bienes(db.Model):
    __tablename__='bienes'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'bienes:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class origen(db.Model):
    __tablename__='origen'
    id = db.Column(db.Integer, primary_key=True)
    n_origen = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'origen:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "n_origen": self.id,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class agente(db.Model):
    __tablename__='agente'
    id = db.Column(db.Integer, primary_key=True)
    name_agente = db.Column(db.String(50), primary_key=True)
    id_t_id = db.Column(db.String(50), unique=False, nullable=False)
    agente_ced = db.Column(db.int, unique=False, nullable=False)
    agente_pass = db.Column(db.String(50), unique=False, nullable=False)
    id_estado = db.Column(db.Integer, unique=False, nullable=False)
    
    def __repr__(self):
        return f'agente:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "name_agente": self.name_agente,
            "id_t_id": self.id_t_id,
            "agente_ced": self.agente_ced,
            "agente_pass": self.agente_ced,
            "id_estado": self.id_estado,
            # do not serialize the password, its a security breach
        }

class users(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer, primary_key=True)
    id_t_id = db.Colum(db.Integer, unique=True, nullable=False)
    id_user = db.Column(db.Integer, unique=False, nullable=False)
    id_caract_esp = db.Column(db.String(500), unique=False, nullable=False)
    id_distrito = db.Column(db.String(100), unique=False, nullable=False)
    
    def __repr__(self):
        return f'users:{self.id}'

    def serialize(self):
        return {
            "ID": self.id,
            "DNI": self.dni,
            'Name':self.name,
            'Lastname_1':self.lastname_1,
            'Lastname_2':self.lastname_2,
            "Email": self.email,
            'Active':self.is_active,
            'delete':self.delete,
            'Create_at':self.create_at            
        }

class Comerciantes(db.Model):
    __tablename__='Comerciantes'
    id = db.Column(db.Integer, primary_key=True)
    t_dni = db.Column(db.String(50), unique=False, nullable=False)
    dni = db.Column(db.Integer, unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    Lastname_1 = db.Column(db.String(120), unique=False, nullable=False)
    Lastname_2 = db.Column(db.String(120), unique=False, nullable=False)
    dni = db.Column(db.Integer, unique=False, nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('Users.id'),nullable=False)
    users_id_relation= relationship(Users,primaryjoin=users_id==Users.id)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False,default=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'clients:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "first_lastname": self.first_lastname,
            "second_lastname": self.second_lastname,
            "dni": self.dni,
            "lawyer_id": self.users_id,
            "delete": self.delete,
            "is_active": self.is_active,
            # do not serialize the password, its a security breach
        }
  
class Cases(db.Model):
    __tablename__='Cases'
    id = db.Column(db.Integer, primary_key=True)
    id_case = db.Column(db.Integer, unique=False, nullable=False)
    id_t_date = db.Column(db.String(50), unique=False, nullable=False)
    id_agente = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    id_comerciante = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    nomb_fantacia = db.Column(db.Integer, unique=False, nullable=False)
    fech_incumplimiento = db.Column(db.DateTime(timezone=True), unique=False, nullable=False)
    id_origen = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    id_origen_relation= relationship(Clients,primaryjoin=client_id==Clients.id)
    id_phone = db.Column(db.Integer, db.ForeignKey('Users.id'),nullable=False)
    id_phone_relation= relationship(Users,primaryjoin=lawyer_id==Users.id)
    plazo_garantia = db.Column(db.Integer, unique=False, nullable=True)
    id_description = db.Column(db.Integer, unique=False, nullable=False)
    id_resp_agent = db.Column(db.Integer, unique=False, nullable=True)
    id_bienes = db.Column(db.Integer, unique=False, nullable=False,default=False)
    id_asunto = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    fech_creado = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())
    id_estado = db.Column(db.Integer, db.ForeignKey('Clients.id'),nullable=False)
    
    def __repr__(self):
        return f'Cases {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_case": self.id_case,
            "id_t_date": self.id_t_date,
            "id_agente": self.id_agente,
            "id_comerciante": self.id_comerciante,
            "nomb_fantacia": self.nomb_fantacia,
            "fech_incumplimiento": self.fech_incumplimiento,
            "id_origen": self.id_origen,
            "id_phone": self.id_phone,
            "plazo_garantia": self.plazo_garantia,
            "id_description": self.id_description,
            "id_resp_agent": self.id_resp_agent,
            "id_bienes": self.id_bienes,
            "id_asunto": self.id_asunto,
            "fech_creado": self.fech_creado,
            "id_estado": self.id_estado,
            # do not serialize the password, its a security breach
        }   

class texto_casos(db.Model):
    __tablename__='texto_casos'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.string(20), unique=False, nullable=False)
    categoria = db.Column(db.String(200), unique=False, nullable=False)
    texto = db.Column(db.String(2000), unique=False, nullable=False)
    
    def __repr__(self):
        return f'texto_casos:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "cod": self.cod,
            "categoria": self.categoria,
            "texto": self.texto,
            # do not serialize the password, its a security breach
        }

class Case_updates(db.Model):
    __tablename__='Case_updates'
    id = db.Column(db.Integer, primary_key=True)
    case_id = db.Column(db.Integer, db.ForeignKey('Cases.id'),nullable=False)
    case_id_relation= relationship(Cases,primaryjoin=case_id==Cases.id)
    title = db.Column(db.String(500), unique=False, nullable=False)
    description = db.Column(db.String(5000), unique=False, nullable=False)
    delete = db.Column(db.Boolean, unique=False, nullable=False)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Case update: {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "case_id": self.case_id,
            "description": self.description,
            "delete": self.delete,

            # do not serialize the password, its a security breach
        }
#
        
class respuesta_auto(db.Model):
    _tablename_='respuesta_auto'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.String(100), nullable=False)
    titulo = db.Column(db.String(1000), nullable=False)
    descrip = db.Column(db.String(2000), nullable=False)
    
    def __repr__(self):
        return f'respuesta_auto {self.id}'

    def serialize(self):
        return{
        "id": self.id,
        "cod": self.cod,
        "titulo": self.titulo,        
        "descrip": self.descrip,
        }
        
class Notifications(db.Model):
    _tablename_='Notifications'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(250), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('Users.id'),nullable=False)
    user_id_relation= relationship(Users,primaryjoin=user_id==Users.id)
    create_at = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())

    def __repr__(self):
        return f'Notifications {self.description}'

    def serialize(self):
        return{
        "id": self.id,
        "description": self.description,
        "date": self.create_at,
        }
        
    