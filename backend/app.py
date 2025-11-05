from flask import *
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
app.config['SECRET_KEY'] = 'samyakfulzele'
CORS(app)

# ✅ Keep this connection active globally
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="design_project"
)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    company = data.get('company')
    feedback = data.get('feedback')

    try:
        cursor = db.cursor()

        sql = "INSERT INTO users (name, email, company, feedback, timestamp) VALUES (%s, %s, %s, %s, NOW())"
        cursor.execute(sql, (name, email, company, feedback))
        db.commit()

        cursor.close()

        return jsonify({"message": "Form submitted successfully!"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
