//join to arry using concat method
let arr = [1,2,3,4,5,6];
let arr2 =[7,8,9,9];
console.log(arr.concat(arr2))
//join two arry using spard ...
let ar1 =[1,2,3,4,5,6];
let ar2 = [7,8,9,10];
let join = [...ar1, ...ar2]//agr array ky ander sprad krwye to hr itm comma sy alg ho ga
console.log(join)
console.log(...ar1,...ar2)// agr pranthes ky ander sparad krwye to hr sirf alg hi ho ga
//we also join arry into string or object
let ary =[1,2,3,4,5,6];
let str ="This is my string";
let con = [...str, ...ary];//agr hum sprad ko ary ky ander stor kry to t alg alg comma sy item print ho 
console.log(con);
console.log( ...str, ...ary)//agr hum sprd ko () ky ander apply kry to sirf alg alg ho gy comma ky bina
//object
//join object into arry and string
let obj ={
    name:"asia",
    age: 20,
};
let newOjb ={...obj, ...str};//string/arry ka index hi es ki keys hoti hy 
console.log(newOjb)
console.log({...obj, ...str, ...ary})
// agr string or ary ky index number same ho jaye to prortiy ary
// ky index number ko milti hy or wohi print hoya hy
// #######################################################################//
//      ((((((((((((((([ Question ])))))))))))))))
// Write a function called maergeObjects that accepts two objects 
// and returns a newObject whiich contaisn all the 
// kets and calues of the first object and second object

let obj1 ={
    name:"asia",
    age:20,
};
let obj2 ={
class:13,
sub:"ADP",
}

function margeObject(ob1,ob2){
    let marge = {...ob1, ...ob2};
return marge;
}
console.log(margeObject(obj1,obj2))
//*********************************************************************** */
//square and sum of arry using arrow function and then find the averge of array
let aryy = [1,2,3,4,5,6];
let squre = aryy.map((el)=> el*2);//squre
let sum = squre.reduce((sum,el) => sum+el);//sum
let avr = sum/aryy.length;//aver
//********************************************************************* */
//creat a new arry whos element are in uppercase of the words parsent in the 
//orignal arry
let ar = ["word","this","web"];
let ab = ar.map((el)=> el.toUpperCase());
console.log(ab)
//we can't direct convert  arry into upercase 
// map function ki madad sy os ky item ko acces kr hy item ky oper upercause apply krty hy
//******************************************************************** */
let aary = [1,2,3,4,5];
let newary = aary.map((el)=> el+5) 
console.log(newary)
//*********************************************************************** */
//                   Destruching
// destruching ka matlab ek variable sy kuch value nikal kr kisi dosry 
//variable ko assinge krna
//                      Arry destruching
let aaa = ["asia","muryam","bushra","sondas","arooj"];
let [nam1,nam2,nam3,...other] = aaa; //index wise value variable ma stor hoti jaye gi 
console.log(nam1);
console.log(nam3)
//              Object destruching
let objet ={
    name:"arooj",
    class:12,
    age:20,
    section:"first"
}
let {name:username, class:group}= objet;// objet ka index ni hota es liye humy batna prta hy kis key ki value variable ma store ho
