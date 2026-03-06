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
