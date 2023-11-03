
let a = 10;
console.log(a) //we print variable with the help of consol.log
                //Templet litrels
 // Templete Litrels is used for embded diffrent expration in a string
 //matlab  diffrent variable ko string ky ander add krna 
let nam = "Asia";
let age =20;                                          
console.log(`My name is ${nam}.I am ${age} years old.`) //easy method of contatinate is templete litrels
console.log("My name is ",nam,"I am " ,age,'years old.')//diffrent method of contatinate is indivial string

              //opertors
// == opertor compair only value not a type of vairable.
// === opertor compair both value and type of variable.     
             
             // non-number copraisan 
// (a-z) [unicode(61......)] is large then(A-Z) [unicode(41....)]

            //jawaScript follow BOMAS rule
//first slove   operter:  brakets open(){}[]          
//second slove  operter:    **
//third solove  operter:    %,/,*    This operter same prortiy but first solove those come first from left to right
//fourth solove operter:   + ,-

            

         //if statment
        //  Trafic light system
alert("Please enter your color") //alert box open  hota hy
 
let color= prompt(" color:");//user sy input lena

if (color == "red"){
    console.log("stop")
}
if (color=="yellow"){
    console.log("slowdown")
}
if (color=="green"){
    console.log("go")
}
        //if statment 
        //Popcone size
  alert('Please enter your size')  
  let size = prompt("size:")

   if (size == 'xl'){
    console.log("Its price is 250 rupees.")
   }     
   else if (size=='l'){
    console.log("Its price is 200 repees.")
   }
   else if (size=='m'){
    console.log("Its price is 100 rupees.")
   }
   else if( size=='s'){
    console.log("Its price is 50 rupees.")
   }
   else{
    console.log("Sorry out of your rang")
   }
//Swiched statment
alert =("enter som")
   let day = prompt("enter your day")

switch (day){ 
    case "1": 
        console.log("Monday"); 
        break;
    case "2": 
        console.log("tuesday");
        break;
    case "3":
        console.log("thusday"); 
            break;
    case "4":
        console.log("wednesday");
        break;
    case "5":
        console.log("friday") ;
        break;
    case "6":
        console.log("saturday"); 
        break;
    case "7":
        console.log("sunday");
        break; 
    default :
    console.log("NOthing day show"); 
}
      