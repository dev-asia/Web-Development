         //Method of arrys
let month=['january','july','march','August'];

 month.unshift("add.start")//Add item to start
 month.shift() //delete item from start
 month.push("add-end")//add item to end
 month.pop()//delte item form end
 month[3]="jun" //replace item
 month.reverse()//revers item original not copy
 month.indexOf("August")//access index using their item
 month[1]//access item using thier index
 month.includes("july")//Search item 

      //Connect two arrys
 let fst=["months","years","weeks"];
 let snd=["sunday","monday","tuesday"];
console.log((fst.concat(snd)))//return copy 
 
            //Splice
//syntax(variable.splic(strt/index,delete,add,))
console.log(month.splice( 0  ,  2,   "july","jun"))//replace
console.log(month.splice( 0  ,  0,   "july","jun"))//add
console.log(month.splice( 0  ,  2,))//delete
//we prfome diffirent opration with the help of splic method 
//for example (add ,delet,replace)

         //Arry Refrence
//Refrence mean location of data where data is store 
//jb bi two arry ki value same  ho to wo equl/true ni hoty
//equl/true sirf tb hi ho gy jn on ki refrence same ho ga.
//In arry  refrence are compair not a value or type

//question: revers the arry
let lan=['c','c++','html','jacascript','ptython','java','c#','sql'];
console.log(lan.reverse())


          //Nested arry
//           0 index       1 index          2 index
let ary= [['x',null,"o"],[null,'xot',null],['o',null,'x']]
console.log(ary)
ary[2][0] //mean 2 index ky ander ja kr 0 index ko lena
ary[1][2]// 1 index ky ander ja kr 2 index ko print krna
ary[1][1][2]//1 index ky ander ja kr 1 index pr 2 index ko print krna
  

//Arry are not equl because its refrence diffrence
//In array compair refrence not value
let fAry=["this","is","an",77];
let sAry=["this","is","an",77];
if (fAry==sAry){
    console.log("This array are equl.")
}
else{
    console.log("This array are not equl.")
}
//string are equl.Q ky string ko koi fark ni prata ky es ka refrence diffrent hy
//string compair value not refrence
let str="This is arry";
let str2="This is arry";
if (str==str2){
    console.log("This string are equl")
}
else {
    console.log("This string are not equl")
}



