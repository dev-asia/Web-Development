 //  one
let num = 20;
if (num%10==0) {
    console.log("good")
}
else {
    console.log("bad")
}

//Two: Embted variable in a string using litrels

let Name = prompt("Enter user name:");
let age = prompt("Enter user age:");
let information = (`${Name} is ${age} years old.`);//embaded
alert (information)

//Three
let querter =prompt("Enter Quarter num");
switch (querter){
    case "1":
        console.log("january,Feburary,March");
        break;
    case "2":
        console.log("April,may,jun");
        break;
    case "3":
        console.log("july,Agust,september");
        break;
    case "4":
        console.log("October,Novmber,Desember");
        break;
    default:
        console.log("Nothing Show here");
}

//Four
let str = "apple";
          //true                         //flas
if ((str[0]=="a" || str[0]=='A') && (str.length>5)){
 console.log("String is golden")
}
else {
    console.log("Strng in not golden")
}
//Five
                     //first method return true or flase
//check last digit same or not 
let frstNum=32;
let secondNum=47852;
let frstNumStr=frstNum.toString(); //convert number-type into string type
let secondNumStr=secondNum.toString();
 console.log(frstNumStr[frstNumStr.length-1] ==secondNumStr[secondNumStr.length-1]);
                     //second method return number
 if( (frstNum%10) ==(secondNum%10)){
    console.log("numbers have the same last digit whiich is",frstNum%10)
 } else {
    console.log("number have not same last digit ")
 }

//six
let one=20;   //find the lartest number
let two=30;
let three=40;
if (one>two && one>three){
    console.log("ONE is largest number");
}
else if (two>three){
    console.log("TWO is largest number");
}
else {
    console.log( three,"THREE is largest number");
}