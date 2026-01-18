const inputMessage = document.getElementById("inputMessage");
const sendBtn = document.getElementById("sendBtn");
const chatbox = document.getElementById("chatbox");

function appendMessage(text, sender){
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);

    const textBubble = document.createElement("span");
    textBubble.classList.add("text-bubble");
    textBubble.textContent=text;

    if(sender =="bot"){
        const iconImg = document.createElement(img);
        iconImg.src="logo.jpg";
        iconImg.classList.add("bot-chat-logo");
        iconImg.alt="bot logo";
        msgDiv.appendChild(iconImg);
    }
    msgDiv.appendChild(textBubble);
    chatbox.appendChild(msgDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage(){
    const message = inputMessage.value.trim();

    if(!message) return ;
    appendMessage(message, "user");
    inputMessage.value = '';
    sendBtn.disabled=true;
}

sendBtn.addEventListener("click", sendMessage);
inputMessage.addEventListener("keypress", function (e){
    if (e.key === "Enter") sendMessage();
})