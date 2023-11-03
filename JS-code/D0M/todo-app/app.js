let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let input=document.querySelector("input");
let ul = document.querySelector("ul");




btn.addEventListener("click",()=>{
li=document.createElement("li")
li.innerText=input.value;
ul.append(li)
btn = document.createElement("button");
btn.innerText="delet"
btn.classList.add("del")
li.appendChild(btn)
input.value="";
console.log(input.value)
})


let btton = document.querySelectorAll(".del")
for (botn of btton){
botn.addEventListener("click",function(){
 let pre= this.parentElement;
 pre.remove()
  
})}