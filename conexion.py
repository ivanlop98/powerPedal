#importar las librerias
from flask import Flask
from models import db #se une models con flask

#crear una instancia de la aplicacion (crear un objeto)
app = Flask(__name__)

#configurar la url de la base de datos (ver documentacion de sql el proceso)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///registros_bici.db"  #.db es data base

#iniciar la extension SQLALCHEMY en la aplicacion Flask
db.init_app(app)

#Con esto se asegura que las operaciones con la base de datos se realicen correctamente
with app.app_context():
    db.create_all()