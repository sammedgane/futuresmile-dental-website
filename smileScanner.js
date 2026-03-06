const upload=document.getElementById("upload")

const result=document.getElementById("result")

upload.addEventListener("change",()=>{

result.innerHTML="Analyzing smile..."

setTimeout(()=>{

result.innerHTML=

`
Possible improvements:

• Teeth whitening recommended  
• Slight alignment correction  
• Cosmetic smile enhancement
`

},2000)

})

function openScanner() {

const input = document.createElement("input");

input.type = "file";
input.accept = "image/*";

input.onchange = function () {

const file = input.files[0];

alert("Analyzing smile...");

setTimeout(() => {

alert(
"Analysis Result:\n\n• Teeth whitening recommended\n• Slight alignment issue\n• Consider cosmetic dentistry"
);

},2000);

};

input.click();

}
