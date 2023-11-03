//Print odd number
console.log("prind odd number")
for (let i =1; i<=15; i++){
    if (i%2==1){
        console.log(i)
    }
}
console.log("prind even number")
//Print even number
for(let ii=2; ii<=10; ii++){
    if(ii%2==0){
        console.log(ii)
    }
}
console.log("Another Method of For loop")
//  intilaz   |condition|increment
for(let eve=2; eve<=10; eve=eve+2){
    console.log(eve)
}

console.log("Table of Five")
// start/intilaz |condition/end| increment/step
for(let five=5;    five<=50;      five=five+5){
    console.log(five)
}

//                  For Loop sntynax
//intilaztion: matlab loop start kaha sy ho
//condition:  krna kaye hy
//increment/decrment: kasy krna hy

          //nested loop
//jb tak loop ki condition true rahy gi tb tak loop ky ander jo kuch bi hoya
//wo excute hota hi rahy ga.Chahy es ky ander koi inner loop ho ya string.

console.log("This is my nested loop")
for (let e=5; e<=10;e=e+1){
    console.log(`This is outer loop ${e}`);//loop ky ander variable ko excute krna
    console.log("This is for looooooop string")// loop ky ander string ko excute krna;
    for (let f=5;f>=1;--f){ //loop ky ander inner loop ko excute krna
      console.log(f)
    }
}
// Favriot movie
let movie="avector";
let gas= prompt("Enter your guss:")

while (movie==gas){
    console.log(gas)
}
if (movie == gas){
    console.log("congurlation");
}

else{
    console.log("Try again")
}


//creating password using while loop
let pwd="123";
let gs= parseInt(prompt("Please enter your password"));//conver string into intgers
while (gs!=pwd){                                       //jb tak conditon flas ni ho jati jb tak loop chaly ga .Condition flas tb ho gi jb (gs equl ho jaye ga pwd ky)
    gs= parseInt(prompt("Pleas try again"));
}
if (gs==pwd){
    console.log("conguratlation")
}
//
let a =[1,2,3,4];

for (let A of a){
    console.log(a)
}