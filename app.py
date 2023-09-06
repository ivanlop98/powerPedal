#Importamos las librerias 
from flask import render_template, request, redirect,url_for
from conexion import app, db
from models import Registro


#Crear aplicacion de Flask
#app = Flask(__name__)

#Crear un end-point
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/cargar_datos', methods = ['GET','POST'])
def cargar_datos():
    #Si el metodo es POST obtenemos los datos 'nombre','apellido' y 'cedula'
    if request.method == 'POST':
        nombre = request.form['nombre']
        correo = request.form['correo']
        celular = request.form['celular']
        contrasenha = request.form["contrasenha"]
        re_contrasenha = request.form["re_contrasenha"]

        #Creamos un objeto de la clase Registros con los datos obtenidos
        registros = Registro(nombre, correo, celular, contrasenha, re_contrasenha)

        db.session.add(registros)#Agregar a la sesion de la base de datos
        db.session.commit()#Confirmamos la carga de los datos

        return render_template('signUp.html')#Renderizamos la pagina HTML
    
    return render_template('signUp.html')



#Crear un end-point
@app.route('/signUp')
def SignUp():
    return render_template("signUp.html")

#Crear un end-point
@app.route('/logIn')
def LogIn():
    return render_template("logIn.html")

#Crear un end-point
@app.route('/recorrido')
def recorrido():
    return render_template("recorrido.html")


#Crear un end-point
@app.route('/resumen')
def resumen():
    return render_template("resumen.html")