const chatEl = document.getElementById("chatWindow");

function appendMsg(role, text){
  const div = document.createElement("div");
  div.innerHTML = `<b>${role}:</b> ${text}`;
  chatEl.appendChild(div);
}

function handleSend(){
  const input = document.getElementById("userInput");
  const text = input.value;
  input.value = "";
  appendMsg("أنت", text);

  appendMsg("بوت", "تم استلام رسالتك ✔️");
}
