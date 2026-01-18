from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class chatRequest(BaseModel):
    message: str

def get_bot_response(user_message):
    message = user_message.lower()
    if "hello" in message or "hi" in message:
        return "Hello! How can I help you today?"
    else:
        return "Sorry, I don't understand tht yet."

@app.post("/chat")
def chat(request: chatRequest):
    reply = get_bot_response(request.message)
    return {"reply": reply}
