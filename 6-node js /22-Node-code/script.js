
//Process.argv   1
//jasy hamry pass promts/input hota hy or os input ko
//hum code ky ander use kr skty hy bilkul wasye hi
//argument hota hy
//jis ko files ky saat dety hy or code ky ander use kr skty hy

let argv = process.argv;
for(let i=0; i<argv.length; i++){
    console.log("hello hy",argv[i])
}
// 2
//require data form files that persent same folder

//require some function and vlaue from another files 1
//require mean kisy sy kuch lena 
let math = require("./math");
console.log(math.sumFun(3,4))

//import some function from another files//For this purpose we need to creat own package.json and add key pair wich is "type":"module"
// import{sum,multi} from "./math.js"//It provide choice 
// console.log(sum(2,5))

// 3
//require data form folder that persent same folder
// let infoFurits = require("./folder");
// console.log(infoFurits)
