import bcrypt
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from connection.database import conn

app = Flask(__name__, static_url_path='', template_folder='../templates', static_folder='../static')
cors = CORS(app)

@app.route('/')
def root():
    return render_template('index.html')

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
    
if __name__ == "__main__": 
   app.run(debug=True)