from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
client = OpenAI(api_key=os.getenv('API_KEY'))

@app.route('/generate-response', methods=['POST'])
def generate_response():
    data = request.json
    system_message = data.get('systemMessage')
    prompt = data.get('prompt')
    print(system_message)

    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": prompt}
            ],
            model="gpt-3.5-turbo",
        )

        response = chat_completion.choices[0].message.content
        return jsonify({'response': response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
