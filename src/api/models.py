
from flask_sqlalchemy import SQLAlchemy
import datetime
from sqlalchemy.orm import relationship

db = SQLAlchemy()

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

class tipo_id(db.Model):
    __tablename__='tipo_id'
    id = db.Column(db.Integer, primary_key=True)
    cod_t_id = db.Column(db.Integer, unique=False, nullable=False)
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
    cod = db.Column(db.String(20), unique=False, nullable=False)
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
    cod = db.Column(db.String(20), unique=False, nullable=False)
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
    id_person_relation= relationship(person,primaryjoin=id_person==person.id)
    cod = db.Column(db.String(20), unique=False, nullable=False)
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
    id_origen = db.Column(db.String(50), unique=False, nullable=False)
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
        
class cantones(db.Model):
    __tablename__='cantones'
    id = db.Column(db.Integer, primary_key=True)
    id_provincias = db.Column(db.String(50), db.ForeignKey('provincias.id'),nullable=False)
    id_provincias_relation = relationship(provincias,primaryjoin=id_provincias==provincias.id)
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

class distrit(db.Model):
    __tablename__='distrit'
    id = db.Column(db.Integer, primary_key=True)
    id_cantones = db.Column(db.String(50), db.ForeignKey('cantones.id'),nullable=False)
    id_cantones_relation = relationship(cantones,primaryjoin=id_cantones==cantones.id)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(50), unique=False, nullable=False)
    
    def __repr__(self):
        return f'distrit:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_cantones": self.id_cantones,
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

class asunto(db.Model):
    __tablename__='asunto'
    id = db.Column(db.Integer, primary_key=True)
    id_materia = db.Column(db.Integer, db.ForeignKey('materia.id'),nullable=False)
    id_materia_relation = relationship(materia,primaryjoin=id_materia==materia.id)
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

class cat_origen(db.Model):
    __tablename__='cat_origen'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'cat_origen:{self.id}'

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
    n_origen = db.Column(db.Integer, unique=False, nullable=False)
    cate_origen = db.Column(db.Integer, db.ForeignKey('cat_origen.id'),nullable=False)
    cate_origen_relation = relationship(cat_origen,primaryjoin=cate_origen==cat_origen.id)
    cod = db.Column(db.String(50), unique=False, nullable=False)
    descrip = db.Column(db.String(300), unique=False, nullable=False)
    
    def __repr__(self):
        return f'origen:{self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "n_origen": self.id,
            "cate_origen": self.cate_origen,
            "cod": self.cod,
            "descrip": self.descrip,
            # do not serialize the password, its a security breach
        }

class agente(db.Model):
    __tablename__='agente'
    id = db.Column(db.Integer, primary_key=True)
    name_agente = db.Column(db.String(50), primary_key=True)
    id_t_id = db.Column(db.String(50), unique=False, nullable=False)
    agente_ced = db.Column(db.Integer, unique=False, nullable=False)
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
    id_t_id = db.Column(db.Integer, unique=True, nullable=False)
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

class comerciantes(db.Model):
    __tablename__='Comerciantes'
    id = db.Column(db.Integer, primary_key=True)
    t_dni = db.Column(db.String(50), unique=False, nullable=False)
    dni = db.Column(db.Integer, unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    Lastname_1 = db.Column(db.String(120), unique=False, nullable=False)
    Lastname_2 = db.Column(db.String(120), unique=False, nullable=False)
    dni = db.Column(db.Integer, unique=False, nullable=False)
    users_id = db.Column(db.Integer, db.ForeignKey('Users.id'),nullable=False)
    users_id_relation= relationship(users,primaryjoin=users_id==users.id)
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

class texto_casos(db.Model):
    __tablename__='texto_casos'
    id = db.Column(db.Integer, primary_key=True)
    cod = db.Column(db.String(20), unique=False, nullable=False)
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

class cases(db.Model):
    __tablename__='Cases'
    id = db.Column(db.Integer, primary_key=True)
    id_case = db.Column(db.Integer, unique=False, nullable=False)
    fech_creado = db.Column(db.DateTime(timezone=True), default=datetime.datetime.utcnow())
    id_estado = db.Column(db.Integer, db.ForeignKey('estado_caso.id'),nullable=False)
    id_origen = db.Column(db.Integer, db.ForeignKey('origen.id'),nullable=False)
    id_origen_relation= relationship(origen,primaryjoin=id_origen==origen.id)    
    id_agente = db.Column(db.Integer, db.ForeignKey('agente.id'),nullable=False)
    phone_origen = db.Column(db.Integer, unique=False, nullable=True)
    id_l_origen = db.Column(db.Integer, db.ForeignKey('origen.id'),nullable=False)
    id_l_origen_relation = relationship(origen,primaryjoin=id_origen==origen.id)  
    id_t_id = db.Column(db.Integer, db.ForeignKey('tipo_id.id'),nullable=False)
    id_t_id_relation = relationship(tipo_id,primaryjoin=id_t_id==tipo_id.id) 
    id_usuario = db.Column(db.Integer, db.ForeignKey('person.id'),nullable=False)
    id_usuario_relation = relationship(person,primaryjoin=id_usuario==person.id)
    id_email = db.Column(db.Integer, db.ForeignKey('email.id'),nullable=False)
    id_email_relation = relationship(email,primaryjoin=id_email==email.id)
    id_phone = db.Column(db.Integer, db.ForeignKey('phones.id'),nullable=False)
    id_phone_relation = relationship(phones,primaryjoin=id_phone==phones.id)
    id_distrito = db.Column(db.Integer, db.ForeignKey('distrit.id'),nullable=False)
    id_distrito_relation = relationship(distrit,primaryjoin=id_distrito==distrit.id)
    id_comerciante = db.Column(db.Integer, unique=False, nullable=False)
    nomb_fantacia = db.Column(db.Integer, unique=False, nullable=False)
    fech_incumplimiento = db.Column(db.DateTime(timezone=True), unique=False, nullable=False)
    plazo_garantia = db.Column(db.String(50), unique=False, nullable=True)
    id_descrip = db.Column(db.Integer, db.ForeignKey('texto_casos.id'),nullable=False)
    id_descrip_relation = relationship(texto_casos,primaryjoin=id_descrip==texto_casos.id)
    id_resp_agent = db.Column(db.Integer, db.ForeignKey('texto_casos.id'),nullable=False)
    id_resp_agent_relation = relationship(texto_casos,primaryjoin=id_resp_agent==texto_casos.id)
    id_bienes = db.Column(db.Integer, db.ForeignKey('bienes.id'),nullable=False)
    id_bienes_relation = relationship(bienes,primaryjoin=id_bienes==bienes.id)
    id_asunto = db.Column(db.Integer, db.ForeignKey('asunto.id'),nullable=False)
    id_asunto_relation = relationship(asunto,primaryjoin=id_asunto==asunto.id)
    
    def __repr__(self):
        return f'Cases {self.id}'

    def serialize(self):
        return {
            "id": self.id,
            "id_case": self.id_case,            
            "fech_creado": self.fech_creado,
            "id_estado": self.id_estado,
            "id_origen": self.id_origen,
            "id_agente": self.id_agente,
            "phone_origen": self.phone_origen,
            "id_l_origen": self.id_l_origen,
            "id_t_id": self.id_t_id,
            "id_usuario": self.id_usuario,
            "id_email": self.id_email,
            "id_phone": self.id_phone,            
            "id_distrito": self.id_distrito, 
            "id_comerciante": self.id_comerciante,
            "nomb_fantacia": self.nomb_fantacia,
            "fech_incumplimiento": self.fech_incumplimiento,
            "plazo_garantia": self.plazo_garantia,
            "id_description": self.id_description,
            "id_resp_agent": self.id_resp_agent,
            "id_bienes": self.id_bienes,
            "id_asunto": self.id_asunto,
            # do not serialize the password, its a security breach
        }   
      
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
    