let h1 = document.querySelector('h1');
//color change one by one using promise
function changeColor(color, deley){
return new Promise((resolve, reject) => {
 setTimeout(()=>{
    h1.style.color = color;
    resolve("your color was changed")
 }
 ,deley)
})  
}


(changeColor("red",1000))
.then((result)=>{
return changeColor("pink",1000)
})
.then((result)=>{
     console.log("your color was pink")
return changeColor("blue",1000)
})
.then(()=>{
    console.log("your color is blue")
})
.catch((error)=>{
    console.log("color are not matched")
})




 //data store one by one depend upon netspeed using promis
 function data(dat){

    return new Promise((resolve, reject) => {
        let netspeed = Math.floor(Math.random() *10);
        if(netspeed >=4){
            resolve("your data was stor")
        }else{
            reject("Net speed is low")
        }
    });
 }
 data("This ")
 .then((result)=>{
    console.log(result)//resut is equl to resolve
    console.log("please enter next data")
 })
 .catch((eror)=>{
    console.log(eror)//error is equl to reject
 })