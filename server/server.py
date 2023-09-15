from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app) 

@app.route('/', methods=['POST'])
def send_request():
  try:
    data = request.json
    if not data:
      return jsonify({"error": "No data provided"}), 400
    graphql_url = "https://leetcode.com/graphql/"
    response = requests.post(graphql_url, json=data)
    # Check the response status code
    if response.status_code == 200:
      print("Server rocked!!")
      return jsonify(response.json()), 200
    else:
      return jsonify({"error": "Failed to send request"}), 500
  except Exception as e:
    return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
  app.run(debug=True)
