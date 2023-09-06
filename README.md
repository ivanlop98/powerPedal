# powerPedal
"Welcome to the repository of our electric bike rental app prototype designed for the vibrant city of Asuncion, Paraguay. Explore the future of eco-friendly urban transportation with our innovative solution!"


Para ejecutar este proyecto de forma local, sigue los siguientes pasos:

### 1. Configura un Entorno Virtual

Es recomendable utilizar un entorno virtual de Python para mantener las dependencias del proyecto aisladas del sistema global. Si aún no tienes `virtualenv` instalado, puedes hacerlo con el siguiente comando:

```bash
pip install virtualenv
Luego, crea un entorno virtual para el proyecto:

bash
Copy code
virtualenv venv
Para activar el entorno virtual en Windows:

bash
Copy code
venv\Scripts\activate
Para activar el entorno virtual en macOS/Linux:

bash
Copy code
source venv/bin/activate
2. Instala las Dependencias
Dentro del entorno virtual, instala las dependencias utilizando pip:

bash
Copy code
pip install -r requirements.txt
3. Configura las Variables de Entorno
Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias, como las credenciales de la base de datos u otras configuraciones sensibles.

env
Copy code
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
# Otras variables de entorno...
4. Inicia la Aplicación
Finalmente, puedes iniciar la aplicación Flask:

bash
Copy code
flask run
La aplicación estará disponible en http://localhost:5000/.

Tecnologías Utilizadas
Python
Flask
Flask-SQLAlchemy
JavaScript
Leaflet
HTML
Tailwind CSS

Contribuciones
Si deseas contribuir al proyecto, siéntete libre de abrir un issue o enviar una solicitud de extracción. ¡Estamos abiertos a colaboraciones!

Licencia
Este proyecto está bajo la licencia [Nombre de la Licencia](URL de la Licencia).
