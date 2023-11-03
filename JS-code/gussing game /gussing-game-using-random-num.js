
let max=prompt("Enter max number");
let random = Math.floor(Math.random()*max)+1;

let gus=prompt("Enter your guss");

while(true){
 
    if(gus=="quit"){
        console.log("you are quit the gus");
        break
    }
   else if(gus==random){
    console.log("you are right the random number is:",random);
    break
   }
   else if(gus<random){
    gus=prompt("hint:your number is too small")
   }
   else{
   gus=prompt("hint:you are number is too large")
   }
}