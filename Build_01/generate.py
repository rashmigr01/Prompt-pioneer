import os
import pickle
from dotenv import load_dotenv
from openai import OpenAI
from prompts import prompts, strats

load_dotenv()

client = OpenAI(
    api_key = os.getenv('API_KEY'),
)

prompts_list = []
responses_list = []

for i in range(10):
    for j in range(16):
        chat_completion_1 = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": strats[j],
                },
                {
                    "role": "user",
                    "content": prompts[i],
                }
            ],
            model="gpt-3.5-turbo",
        )

        print(chat_completion_1.choices[0].message.content)
        responses_list.append(chat_completion_1.choices[0].message.content)
        
        complete_prompt = "{ 'role': 'system', 'content': " + strats[j] + " }, { 'role': 'user', 'content': " + prompts[i] + " }"
        prompts_list.append(complete_prompt)

with open('prompts', 'wb') as f:
    pickle.dump(prompts_list, f)
with open('responses', 'wb') as f:
    pickle.dump(responses_list, f)
