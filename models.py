from flask_sqlalchemy import SQLAlchemy

#Inicializamos la extension SQLAlchemy

db = SQLAlchemy()

#Definimos una clase que representa una tabla en la base de datos

class Registro(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    correo = db.Column(db.String(50), nullable=False)
    celular = db.Column(db.Integer, nullable=False)
    contrasenha = db.Column(db.String(8), nullable=False)
    re_contrasenha = db.Column(db.String(8), nullable=False)

    #Constructor de clase
    def __init__(self, nombre, correo, celular, contrasenha, re_contrasenha):
        self.nombre = nombre
        self.correo = correo
        self.celular = celular
        self.contrasenha = contrasenha
        self.re_contrasenha = re_contrasenha

