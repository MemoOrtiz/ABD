import bcrypt
from flask import Flask, request, jsonify, render_template 
from flask_cors import CORS
from connection.database import conn
from flask_socketio import SocketIO, emit
import mysql.connector


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
    #cursor = conn.cursor()
    conn = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")
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


@app.route('/api/alumnos/<matricula>')
def get_alumno(matricula):
    # Conectar a la base de datos MySQL
    cursor = conn.cursor()

    # Ejecutar consulta SQL para obtener los detalles del alumno
    consulta = "SELECT nombre_alumno, paterno_alumno, materno_alumno FROM Alumnos WHERE matricula = %s"
    cursor.execute(consulta, (matricula,))

    # Obtener resultados de la consulta
    alumno = cursor.fetchone()

    # Convertir resultados a diccionario
    data = {'nombre_alumno': alumno[0], 'paterno_alumno': alumno[1], 'materno_alumno': alumno[2]}

    # Cerrar cursor
    cursor.close()

    # Devolver el diccionario en formato JSON
    return jsonify(data)


@app.route('/departamentos', methods=['GET'])
def get_departamentos():

    connector = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")

    cursor = connector.cursor()
    consulta = "SELECT id_Departamento, nombre_departamento FROM Departamentos"
    cursor.execute(consulta)
    departamentos = cursor.fetchall()
    data = []
    for departamento in departamentos:
        data.append({'id_Departamento': departamento[0], 'nombre_departamento': departamento[1]})
    
    cursor.close()
    return jsonify(data)

@app.route('/moderadores', methods=['GET'])
def get_moderadores():
    connector1 = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")
    cursor = connector1.cursor()
    consulta = "SELECT id_moderador, nombre_mod, paterno_mod, materno_mod FROM Moderador"
    cursor.execute(consulta)
    moderadores = cursor.fetchall()
    data = []
    for moderador in moderadores:
        data.append({'id_moderador': moderador[0], 'nombre_mod': moderador[1], 'paterno_mod': moderador[2], 'materno_mod': moderador[3]})
    
    cursor.close()
    return jsonify(data)


@app.route('/api/moderadores/<id_moderador>', methods=['GET'])
def get_moderador(id_moderador):
    connector5 = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")

    cursor = connector5.cursor()

    consulta = "SELECT nombre_mod, paterno_mod, materno_mod FROM Moderador WHERE id_moderador = %s"
    cursor.execute(consulta, (id_moderador,))
    moderador = cursor.fetchone()
    data = {'nombre_mod': moderador[0], 'paterno_mod': moderador[1], 'materno_mod': moderador[2]}
    
    cursor.close()
    return jsonify(data)


@app.route('/conceptos', methods=['GET'])
def get_conceptos():
    connector2 = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")
    cursor = connector2.cursor()
    consulta = "SELECT id_concepto, concepto FROM Conceptos_Queja"
    cursor.execute(consulta)
    conceptos = cursor.fetchall()
    data = []
    for concepto in conceptos:
        data.append({'id_concepto': concepto[0], 'concepto': concepto[1]})

    cursor.close()
    return jsonify(data)

@app.route('/estadosQueja', methods=['GET'])
def get_estado_queja():
    connector3 = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")
    cursor = connector3.cursor()
    consulta = "SELECT id_estado_queja, nombre_estado FROM Estados_Queja"
    cursor.execute(consulta)
    estado_queja = cursor.fetchall()
    data = []
    for estado in estado_queja:
        data.append({'id_estado_queja': estado[0], 'nombre_estado': estado[1]})

    cursor.close()
    return jsonify(data)

@app.route('/detallesQueja', methods=['GET'])
def get_detalles_queja():
    connector4 = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")
    cursor = connector4.cursor()
    consulta = "SELECT detalle_queja FROM Queja"

    cursor.execute(consulta)
    detalles_queja = cursor.fetchall()
    data = []
    for detalle in detalles_queja:
        data.append({'detalle_queja': detalle[0]})

    cursor.close()
    return jsonify(data)

@app.route('/quejas', methods=['GET'])
def get_quejas():
    connector6 = mysql.connector.connect(host="localhost",
    user="abd",
    password="1234",
    database="quejas")
    cursor = connector6.cursor()
    consulta = """
    SELECT 
    Quejas.queja_id, 
    Quejas.matricula, 
    Departamentos.nombre_departamento AS nombre_departamento, 
    CONCAT(Moderador.nombre_mod, ' ', Moderador.paterno_mod, ' ', Moderador.materno_mod) AS nombre_completo_moderador,
    Conceptos_Queja.concepto AS concepto, 
    Estados_Queja.nombre_estado AS nombre_estado_queja, 
    Quejas.detalles_queja 
    FROM 
    Quejas 
    INNER JOIN Departamentos ON Quejas.id_Departamento = Departamentos.id_departamento 
    INNER JOIN Moderador ON Quejas.id_moderador = Moderador.id_moderador 
    INNER JOIN Conceptos_Queja ON Quejas.id_concepto = Conceptos_Queja.id_concepto 
    INNER JOIN Estados_Queja ON Quejas.id_estado_queja = Estados_Queja.id_estado_queja
    ORDER BY nombre_departamento ASC;"""

    cursor.execute(consulta)

    quejas = cursor.fetchall()
    data = []
    for queja in quejas:
        data.append({'queja_id': queja[0], 'matricula': queja[1], 'id_Departamento': queja[2], 'id_moderador': queja[3], 'id_concepto': queja[4], 'id_estado_queja': queja[5], 'detalles_queja': queja[6]})

    cursor.close()
    
    return jsonify(data)

@app.route('/obtener-queja/<int:queja_id>', methods=['GET'])
def obtener_queja(queja_id):
    try:
        connector1 = mysql.connector.connect(host="localhost",
        user="abd",
        password="1234",
        database="quejas")
        cursor = connector1.cursor()
        consulta = "SELECT * FROM Quejas WHERE queja_id = %s"
        cursor.execute(consulta, (queja_id,))
        queja = cursor.fetchone()

        if queja is None:
            return jsonify({'error': 'No se encontró la queja con el id proporcionado'}), 404
        
        queja_dict = {
            'queja_id': str(queja[0]), 
            'id_estado_queja': str(queja[1]), 
            'id_moderador': str(queja[2]), 
            'id_Departamento': str(queja[3]), 
            'id_concepto': str(queja[4]), 
            'matricula': str(queja[5]),
            'detalles_queja': queja[6]
            }
        cursor.close()
        
        return jsonify(queja_dict)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/insertar-queja', methods=['POST'])
def insertar_queja():
    try:
        nueva_queja = request.json
        connector1 = mysql.connector.connect(host="localhost",
        user="abd",
        password="1234",
        database="quejas")
        cursor = connector1.cursor()
        consulta = "SELECT queja_id FROM Quejas WHERE queja_id = %s"
        cursor.execute(consulta, (nueva_queja['queja_id'],))

        resultado = cursor.fetchone()
        if resultado is not None:
            cursor.close()
            return jsonify({'mensaje': 'La queja ya existe'}), 400
        
        queja_id = nueva_queja['queja_id']
        matricula = nueva_queja['matricula']
        id_Departamento = nueva_queja['id_Departamento']
        id_moderador = nueva_queja['id_moderador']
        id_concepto = nueva_queja['id_concepto']
        id_estado_queja = nueva_queja['id_estado_queja']
        detalles_queja = nueva_queja['detalles_queja']

        print(queja_id, matricula, id_Departamento, id_moderador, id_concepto, id_estado_queja, detalles_queja)
        consulta = "INSERT INTO Quejas (queja_id, matricula, id_Departamento, id_moderador, id_concepto, id_estado_queja, detalles_queja) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(consulta, (queja_id, matricula, id_Departamento, id_moderador, id_concepto, id_estado_queja, detalles_queja))

        connector1.commit()
        cursor.close()
        socketio.emit('actualizar_quejas')

        return jsonify({'mensaje': 'Queja insertada'}), 201
    
    except Exception as e:
        return jsonify({'mensaje': 'Error al insertar la queja'}), 500
    
@app.route('/eliminar-queja/<int:queja_id>', methods=['DELETE'])
def eliminar_queja(queja_id):
    try:
        connector2 = mysql.connector.connect(host="localhost",
        user="abd",
        password="1234",
        database="quejas")

        cursor = connector2.cursor()
        consulta = "DELETE FROM Quejas WHERE queja_id = %s"
        cursor.execute(consulta, (queja_id,))
        connector2.commit()

        cursor.close()
        socketio.emit('actualizar_quejas')

        return jsonify({'mensaje': 'Queja eliminada'})
    except Exception as e:
        return jsonify({'mensaje': 'Error al eliminar la queja'}), 500
                                             

@app.route('/modificar-queja/<int:queja_id>', methods=['PUT'])
def modificar_queja(queja_id):
    try:
        queja = request.json
        connector3 = mysql.connector.connect(host="localhost",
        user="abd",
        password="1234",
        database="quejas")
        cursor = connector3.cursor()
        consulta = "UPDATE Quejas SET matricula = %s, id_Departamento = %s, id_moderador = %s, id_concepto = %s, id_estado_queja = %s, detalles_queja = %s WHERE queja_id = %s"
        cursor.execute(consulta, (queja['matricula'], queja['id_Departamento'], queja['id_moderador'], queja['id_concepto'], queja['id_estado_queja'], queja['detalles_queja'], queja_id))

        connector3.commit()
        cursor.close()

        socketio.emit('actualizar_quejas')

        return jsonify({'mensaje': 'Queja modificada'}), 200
    except Exception as e:
        return jsonify({'mensaje': 'Error al modificar el dato'}), 500



if __name__ == "__main__": 
    socketio.run(app, debug=True)
