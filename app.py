from flask import Flask, jsonify, render_template, request
from messages import get_random_message, get_random_joke

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get-message')
def get_message():
    message = get_random_message()
    return jsonify({
        'message': message
    })

@app.route('/get-joke')
def get_joke():
    joke = get_random_joke()
    return jsonify({
        'joke': joke
    })  

if __name__ == "__main__":
    app.run(debug=True)