import bcrypt
from flask import Flask, request, jsonify, render_template 
from flask_cors import CORS
from connection.database import conn
from flask_socketio import SocketIO, emit


app = Flask(__name__, static_url_path='', template_folder='../templates', static_folder='../static')
cors = CORS(app, resources={r"/*": {"origins": ["http://localhost:5000", "http://127.0.0.1:5000"]}})
socketio = SocketIO(app, cors_allowed_origins=["http://localhost:5000", "http://127.0.0.1:5000"])

@app.route('/')
def root():
    return render_template('login.html')

@app.route('/pagePrincipal')
def pagePrincipal():
    return render_template('index.html')

@app.route('/pageGeneric')
def pageGeneric():
    return render_template('generic.html')

@app.route('/pageElements')
def pageElements():
    return render_template('elements.html')
    
def hash_password(password):
    # Genera un salt y luego hashea la contraseña con ese salt
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password


def verify_password(input_password, stored_password):
    # Verifica si la contraseña ingresada coincide con la contraseña almacenada
    return bcrypt.checkpw(input_password.encode('utf-8'), stored_password)


@app.route("/api/log_in", methods=["POST"])
def login():
    
    try:
        data = request.get_json()
        print(data)
        username = data.get('username')
        passw = data.get('password')
        print(passw)
        #hashed_password = hash_password(passw)  # Hash the password before comparison
        #print(hashed_password)
        cursor = conn.cursor()
        query = "SELECT nombre_usuario, contrasena FROM Log_in WHERE nombre_usuario = %s "
        cursor.execute(query, (username,))
        result = cursor.fetchone()

        if result is not None:
            stored_password = result[1]
            print(stored_password)
            #hash_stored_password = hash_password(stored_password)
            #print(hash_stored_password)
            # Verificar la contraseña con bcrypt u otro método seguro
            if passw == stored_password:
                return jsonify({"message": "success"})
            else:
                return jsonify({"message": "Credenciales inválidas"}), 401
        else:
            return jsonify({"message": "Usuario no encontrado"}), 404
    except Exception as e:
        print(e)
        return jsonify({"message": "Error del servidor"}), 500
    

@app.route('/generos')
def get_generos():
    # Conectar a la base de datos MySQL
    cursor = conn.cursor()

    # Ejecutar consulta SQL para obtener géneros
    consulta = "SELECT id_genero, nombre FROM Generos"
    cursor.execute(consulta)

    # Obtener resultados de la consulta
    generos = cursor.fetchall()

    # Convertir resultados a lista de diccionarios
    data = []
    for genero in generos:
        print(genero)
        data.append({'id_genero': genero[0], 'nombre': genero[1]})

    # Cerrar cursor y conexión
    cursor.close()
    #conn.close()

    # Emitir un mensaje para actualizar la tabla
    print("Emitiendo evento 'actualizar_generos'")
    # socketio.emit('actualizar_generos')

    # Devolver la lista de diccionarios en formato JSON
    return jsonify(data)

@app.route('/insertar-dato', methods=['POST'])
def insertar_dato():
    try:
        nuevo_dato = request.json
        cursor = conn.cursor()

        # Verificar si el id_genero ya existe
        consulta = "SELECT id_genero FROM Generos WHERE id_genero = %s"
        cursor.execute(consulta, (nuevo_dato['id_genero'],))
        resultado = cursor.fetchone()

        if resultado is not None:
            cursor.close()
            return jsonify({'mensaje': 'El id_genero ya existe'}), 400

        # Recoger los datos de los campos de entrada
        id_genero = nuevo_dato['id_genero']
        nombre = nuevo_dato['nombre'].upper()  # Convertir el nombre a mayúsculas

        # Ejecutar consulta SQL para insertar el nuevo dato
        consulta = "INSERT INTO Generos (id_genero, nombre) VALUES (%s, %s)"
        cursor.execute(consulta, (id_genero, nombre))

        # Confirmar la transacción
        conn.commit()

        # Cerrar cursor
        cursor.close()

        # Emitir un mensaje para actualizar la tabla
        print("Emitiendo evento 'actualizar_generos'")
        socketio.emit('actualizar_generos')

        return jsonify({'mensaje': 'Dato insertado'}), 201
    
    except Exception as e:
        return jsonify({'mensaje': 'Error al insertar el dato'}), 500
    
        
@app.route('/eliminar-dato/<int:id_genero>', methods=['DELETE'])
def eliminar_dato(id_genero):
    try :
        # Conectar a la base de datos MySQL
        cursor = conn.cursor()

        # Ejecutar consulta SQL para eliminar el dato
        consulta = "DELETE FROM Generos WHERE id_genero = %s"
        cursor.execute(consulta, (id_genero,))

        # Confirmar la transacción
        conn.commit()

        # Cerrar cursor
        cursor.close()

        # Emitir un mensaje para actualizar la tabla
        print("Emitiendo evento 'actualizar_generos'")
        socketio.emit('actualizar_generos')
 
        return jsonify({'mensaje': 'Dato eliminado'})
    except Exception as e:
        return jsonify({'mensaje': 'Error al eliminar el dato'})

if __name__ == "__main__": 
    socketio.run(app, debug=True)
