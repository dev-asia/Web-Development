//     keybord events
let inpu = document.querySelector("#inp");
inpu.addEventListener("keydown",(event)=>{
console.log(event)
  // if(event.code="keyA"){
  //   console.log("you'r perssing the A key ")
  // }else if(event.code="keyB"){
  //   console.log("you'r perssing the B key")
  // }
    console.log("Now you press" ,event.code)// This print when we keydown any key
})

//            submit event

let form =document.querySelector("form");
form.addEventListener("submit",function(event){
event.preventDefault();//stop from going next location
console.log("your form is submit");
console.log(form.elements[0])// access element from form obj
console.log(form.elements[0].value)//access value of elemnt from form obj

})

//       chang and input event lisners 

let input1 = document.querySelector("#input1");
let text1 = document.querySelector("#text1");

//input event lisner display value same time when we type// such as tpying master
input1.addEventListener("input",function(){
    text1.innerText=input1.value;
})
let input2 = document.querySelector("#input2")
let typing2 = document.querySelector("#typing2")
//change event lisner display value  after collection// such as whatsapps chat
input2.addEventListener("change",function(){
    text2.innerText=input2.value;
})
