// //ye function ko lekhny ka chotha santyax hy
// //es ma pura function ek variable may store hota hy
// //Na es function ka koi name hota hy or na hi function keyword use hota hy
//                    //one
// let sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(3,5))
//                   //two
// let avr=(a,b,c)=>{
//     let avrage = a*b*c/3;
//     return avrage;
// }
// console.log(avr(3,4,5))//agr broswer ky oper function call kry to phir console.log ni lakhty
//          //three
// let fun = ()=>{
//     console.log("This is my best practice");
// }
// console.log(fun())
// //          implicit retrun arrow function
// //agr hum ny koi single value return krwani ho return keyword ky baghar 
// //bi return krwa skhy hy. Agr hum return keyword use na kry
// //to phir hum kurly burkets {}  bi use ni krty

// let sub=(a,b)=>(a-b);      //return value without using return keyword 
//  console.log(sub(8,5))


//  //                 setTimeout
//  //agr hum chaty ho ky hamra function kuch time ky baad execute ho to setTime out function use krty .Jo ky bulid in function  hy
//  setTimeout( () => {
//     console.log("What are your real problem");
//  }, 4000);//4 second
// //  setTimeout call ni krna prta ye khud apny time ky baad execute ho jata hy



// //             setInterval
// //ye bi same wohi kaam krta hy lakin ye function ko bar bar excute krta hi rahta hy
// //excution ko rokny ky lia es ko ek variable may store krty 
// //or phir os variable ky oper clearinterval() function apply krty hy
// //jasy hum clearinterval function execution wohi ruk jati hy

  
// let vari = setInterval(() => {
//     console.log("br bar excute krata hy");
//  }, 4000)
 

 //////////////////////////////////////////////////////////////////////////
                   //Qs 1:
//print avarge of arry
let ary = [2,3,4];
let arrayAverage = (ary) => {
    let avr=0;
    for(let i=0; i<ary.length; i++){
        avr=avr+ary[i]

    } return avr/ary.length;
}
////////////////////////////////////////////////////////////////////////
//check even number
let isEven=(num)=>{
if(num%2==0){
    console.log("The number is even.")
} else{
    console.log("The number is not even.")
}
return num;
}
/////////////////////////////////////////////////////////////////////////
//undefind aye ga
const objct = {
    message: 'hello, World!',

    logMessage(){
        console.log(this.message);//normal function ma this ki value wo hoti hy jo os function ko call krta hy wohi os ka this ban jata hy
    }


};
setTimeout((objct.logMessage),1000)
// //////////////////////////////////////////////////////////////////////////

//this keyword value in arrow function and normal function

let object = {
    length:5,
    name:"asia",
    age:20,
    get :this,//globel scope
    callBack(){
        console.log(this)//ye function object ko hi this bna leta hy
        return this.length;
    }
    ,
    callUp:()=>{
        console.log(this);//arrow function object/parents ky this ko this bnta  hy
        return this.length
    }
};
//return the square of number using arrow function
let n = 2;
let squar = (n)=>{  //explict return value
    return n**n;
} 
let nu = 2;
let square = (n)=>(n**n)//implicit return value



///////////////////////////////////////////////////////////////////////////
let id =setInterval(() => {
    console.log("hello word");
}, 2000);

setTimeout(()=>{
   clearInterval(id);//es sy setinterval ki execution 10 second ky baad ruk jaye hi
   console.log("clearInerval in apply")
},10000)