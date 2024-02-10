const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const getResp = (question)=>{

}
const handleChat = (e) => {
    if (e == "click" || e.key == "Enter"){
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if(!userMessage)return;

    fetch("http://127.0.0.1:5000",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"question-body" : userMessage})})

    chatbox.appendChild(createChatLi(userMessage,"outgoing"));

    setTimeout(() => {
        chatbox.appendChild(createChatLi("Thinking...","incoming"))
    }, 600 );
    }
}

sendChatBtn.addEventListener("click", handleChat(e));
sendChatBtn.addEventListener("keypress", handleChat(e));
