//events-событые-окуя
//бул колдонуучу тарабынанан аткарылган бардык иш аракеттер,действие
//addeventListener-бул метод тегге угуучу кошот , качан гана коюлган шарт аткарылганда угуучу дароо функцияны аткарат.
// let div=document.getElementById('div')
// div.addEventListener("click" , ()=> {
//     div.style.width="200px"
//     div.style.height="200px"
//     div.style.backgroundColor='red'
//     div.style.borderRadius="50%"
// })
// p.innerhtml=название+value
let html_input = document.getElementById("text")
let html_p = document.getElementById("text2")
html_input.addEventListener("input", () => {html_p.innerHTML=html_input.value})

