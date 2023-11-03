// //poem
// function poem(){

//         console.log("Twinkle Twinkle little star")
//         console.log("how i wonder what you are")
//         console.log("Up above the world so highy")
//         console.log("like the time in the sky")
    
      
// }
// poem()
// //************************************************************************* */

// //genrate random number from 1 to 6 using funcation
// function dic(){
   
//     random=Math.floor(Math.random()*6+1)
//    console.log(random)
// }
// dic()
// //*************************************************************************** */
// //avrage of three number using  funcation

// function avg(a,b,c){
// console.log((a+b+c)/3);
// }
// avg(1,2,3)

// //*************************************************************************** */
// //creat a table using funcation

// function tableof(num){       // argument(num) treat as a variable
//     for(i=num; i<=num*10; i=i+num){
//         console.log(i)
//     }
// }
// tableof(2)      //prameter(2) treat as a value of variable
// tableof(5)
// //************************************************************************ */
// //retrun the sum of number from 1 to n
// function sum(n){
//     let a = 0;
//     for(let i=1; i<=n;i++){
//         a= a+i
//     } 
//     return a ;   //we cannot perfom/excute any task after uning the return keyword

// }
// console.log(sum(7))
// //************************************************************************** */

// let str=["apple","banana","mango"];
// function concant(){
//     let allString="";
// for (let i=0;i<str.length;i++){
//     allString = allString+str[i]

// }return allString;
// }
// console.log(concant())
// //*********************************************************************** */
// let greet="hello"; //Globel scope variable
// function changGreet(){
//     let greet="Aslamalikum";
//     console.log(greet);//function scope variable
//     function inner(){
//         console.log(greet);//lexical scope variable
//     }
// inner()//we can access the inner function only inside the outer funcation

// }
// console.log(greet);
// changGreet()
// //*********************************************************************** */
// //Stor function in a variable
// let a = function(a,b){
//      sm=a+b;
//     console.log(`The sum of this number is ${sm}.`);
// }
// a(2,4)
// //Higher order function
// //In this funcion we use another function as argument
// function multipulGreet(){
    
// }
//Craet function to check even or odd number
function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
    console.log(n%2==1);
}
 
}      
else if(request=="even"){
    return function(n){
    console.log(n%2==1);
  
}

}
else{
    console.log("wrong request")
}
}
let request="odd";
let func = oddEvenTest(request);





