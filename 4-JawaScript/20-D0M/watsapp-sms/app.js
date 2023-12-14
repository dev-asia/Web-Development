let asiaInput = document.querySelector("#asia");
let amnaInput = document.querySelector("#amna");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let as = document.querySelector(".as")
let am = document.querySelector(".am")
let icon = document.querySelector("i")
console.log(icon)

console.log(asiaInput.value)

asiaInput.addEventListener("change", smsAsia)
amnaInput.addEventListener("change", smsAmna)


function smsAsia(){
    let sms = document.createElement("p");
    sms.innerHTML=  `${asiaInput.value} ` ;
    sms.classList.add("pra");
    am.insertAdjacentHTML("beforebegin",sms.outerHTML)
    let lineBreak = document.createElement("br");
    am.insertAdjacentHTML("beforebegin",lineBreak.outerHTML)
    asiaInput.value=""
}
function smsAmna(){
    let sms = document.createElement("p");
    sms.innerHTML=  `${amnaInput.value} ` ;
    sms.classList.add("pra");
    as.insertAdjacentHTML("beforebegin",sms.outerHTML)
    let lineBreak = document.createElement("br");
    as.insertAdjacentHTML("beforebegin",lineBreak.outerHTML)
    amnaInput.value=""
}


