import bcrypt
from flask import Flask, request, jsonify, render_template 
from flask_cors import CORS
from connection.database import conn
from flask_socketio import SocketIO, emit


app = Flask(__name__, static_url_path='', template_folder='../templates', static_folder='../static')
cors = CORS(app, resources={r"/*": {"origins": ["http://localhost:5000", "http://127.0.0.1:5000"]}})
socketio = SocketIO(app, cors_allowed_origins=["http://127.0.0.1:5000", "http://localhost:5000"])

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

@app.route('/pageQuejas')
def pageQuejas():
    return render_template('quejas.html')
    
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

@app.route('/generos/<int:id_genero>', methods=['GET'])
def get_genero(id_genero):
    cursor = conn.cursor()

    # Ejecutar consulta SQL para obtener el nombre del género
    consulta = "SELECT nombre FROM Generos WHERE id_genero = %s"
    cursor.execute(consulta, (id_genero,))

    # Obtener resultado de la consulta
    resultado = cursor.fetchone()

    # Cerrar cursor
    cursor.close()

    if resultado is not None:
        # Devolver el nombre del género en formato JSON
        return jsonify({'nombre': resultado[0]})
    else:
        return jsonify({'mensaje': 'Género no encontrado'}), 404

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
    
@app.route('/modificar-dato/<int:id_genero>', methods=['PUT'])
def modificar_dato(id_genero):
    try:
        nuevo_dato = request.json
        cursor = conn.cursor()

        # Recoger los datos de los campos de entrada
        nombre = nuevo_dato['nombre'].upper()  # Convertir el nombre a mayúsculas
        print(nombre)
        # Ejecutar consulta SQL para modificar el dato
        consulta = "UPDATE Generos SET nombre = %s WHERE id_genero = %s"
        cursor.execute(consulta, (nombre, id_genero))

        # Confirmar la transacción
        conn.commit()

        # Cerrar cursor
        cursor.close()

        # Emitir un mensaje para actualizar la tabla
        print("Emitiendo evento 'actualizar_generos'")
        socketio.emit('actualizar_generos')

        return jsonify({'mensaje': 'Dato modificado'}), 200

    except Exception as e:
        return jsonify({'mensaje': 'Error al modificar el dato'}), 500

@app.route('/alumnos')
def get_alumnos():
# Conectar a la base de datos MySQL
    cursor = conn.cursor()

    # Ejecutar consulta SQL para obtener alumnos
    consulta = "SELECT matricula  FROM Alumnos"
    cursor.execute(consulta)

    # Obtener resultados de la consulta
    alumnos = cursor.fetchall()

    # Convertir resultados a lista de diccionarios
    data = []
    for alumno in alumnos:
        data.append({'matricula': alumno[0]})

    # Cerrar cursor
    cursor.close()

    # Devolver la lista de diccionarios en formato JSON
    return jsonify(data)


@app.route('/api/insertarquejas', methods=['POST'])
def insertar_queja():
    try:
        nueva_queja = request.json
        cursor = conn.cursor()

        # Recoger los datos de los campos de entrada
        queja_id= nueva_queja['queja_id']
        id_login = nueva_queja['id_login']
        id_estado_queja = nueva_queja['id_estado_queja']
        id_moderador = nueva_queja['id_moderador']
        id_Departamento = nueva_queja['id_Departamento']
        id_concepto = nueva_queja['id_concepto']
        matricula = nueva_queja['matricula']
        fecha_ini_queja = nueva_queja['fecha_ini_queja']

        # Ejecutar consulta SQL para insertar la nueva queja
        consulta = """
        INSERT INTO Quejas (queja_id, id_login, id_estado_queja, id_moderador, id_Departamento, id_concepto, matricula, fecha_ini_queja) 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(consulta, (queja_id, id_login, id_estado_queja, id_moderador, id_Departamento, id_concepto, matricula, fecha_ini_queja))

        # Confirmar la transacción
        conn.commit()

        # Cerrar cursor
        cursor.close()

        return jsonify({'mensaje': 'Queja insertada'}), 201

    except Exception as e:
        return jsonify({'mensaje': 'Error al insertar la queja'}), 500

if __name__ == "__main__": 
    socketio.run(app, debug=True)
