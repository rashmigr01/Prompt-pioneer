import os
import pickle
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key = os.getenv('API_KEY'),
)

with open('prompts', 'rb') as f:
    prompts_list = pickle.load(f)
with open('responses', 'rb') as f:
    responses_list = pickle.load(f)

choices_prompts = ""

for i in range(len(prompts_list)):
    choices_prompts += str(i+1) + str(prompts_list[i]) + "\n"

chat_completion_1 = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "Based on the provided criteria and context, analyze and rank the choices."
            },
            {
                "role": "user",
                "content": "Context: I am an 8th grade science teacher from India teaching from the NCERT textbooks who wants to know what the best prompt is to get an answer from ChatGPT. Please pick the top 5 from the provided choices and rank them.\n Criteria: Thoroughness and correctness of the prompt. It should satisfy the necessary and suffiecient conditions of prompting for optimal results as decided by you.\n Choices: "+ choices_prompts,
            }
        ],
        model="gpt-3.5-turbo",
    )

print(chat_completion_1.choices[0].message.content)

choices_responses = ""

for i in range(len(responses_list)):
    choices_responses += str(responses_list[i])

chat_completion_2 = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "Based on the provided criteria and context, analyze and rank the choices."
            },
            {
                "role": "user",
                "content": "Context: I am an 8th grade science teacher from India teaching from the NCERT textbooks who wants to know what the best answer that I've generated using ChatGPT is. Please pick the top 5 from the provided choices and rank them.\n Criteria: Thoroughness and correctness of the answer in relation to each other. It should satisfy the necessary and suffiecient conditions of prompting for optimal results as decided by you.\n Choices: "+ choices_responses,
            }
        ],
        model="gpt-3.5-turbo",
    )

print(chat_completion_2.choices[0].message.content)
