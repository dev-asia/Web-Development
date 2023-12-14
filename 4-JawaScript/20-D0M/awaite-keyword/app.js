let h1 = document.querySelector("h1");
//    awaite keyword
 function any(any){
    return new Promise((resolve, reject) => { 
    setTimeout(()=>{
        console.log("This is my function without using promis", any);
            resolve("your function is execute")
    },1000)
})
   
}

function changColor(color){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        h1.style.color = color
        resolve("your color is  change")
    },1000) 
})
}

async function colo(){
await changColor("red");// first execute
await changColor("yellow");// secont  execute
await changColor("pink");// third exectue
await any("any")//fourth execute
await any("this")
}
colo();
//Rule of awaite keyword
//(1)_ awaite is allways defined/accpetable inside the async function
//(2)_ you can only use awaite with those function that return a promise