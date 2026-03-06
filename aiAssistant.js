const input = document.querySelector(".ai-assistant input")

const body = document.querySelector(".chat-body")

input.addEventListener("keypress",e=>{

if(e.key==="Enter"){

const msg=input.value

body.innerHTML+=`<p>You: ${msg}</p>`

let reply="Please consult our dentist."

if(msg.includes("whitening"))
reply="Professional whitening takes about 45 minutes."

if(msg.includes("implant"))
reply="Dental implants permanently replace missing teeth."

body.innerHTML+=`<p>AI: ${reply}</p>`

input.value=""

}

})
