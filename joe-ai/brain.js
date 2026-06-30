alert("brain.js loaded");

document.addEventListener("DOMContentLoaded", () => {

  const sendBtn =
  document.getElementById("send-btn");

  const input =
  document.getElementById("user-input");

  const chatWindow =
  document.getElementById("chat-window");

  function sendMessage(){

    alert("sendMessage running");

    const msg =
    document.createElement("div");

    msg.innerText =
    input.value;

    msg.style.color =
    "white";

    chatWindow.appendChild(msg);

  }

  sendBtn.addEventListener(
    "click",
    sendMessage
  );

});
