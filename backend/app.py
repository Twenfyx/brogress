from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

lifts = []

@app.route('/add_lift', methods=['POST'])
def add_lift():
    data = request.json
    lifts.append(data)
    return jsonify({"message": "Lift added!", "data": data})

@app.route('/get_lifts', methods=['GET'])
def get_lifts():
    return jsonify(lifts)

if __name__ == '__main__':
    app.run(debug=True)
