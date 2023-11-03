//                    <<<<<<<<<<<<( 1 )>>>>>>>>>>>>>>
// forEach Method     

// ye mehod arry ki list bnata hy same for of loop ki trha

let arr = [1,2,3,4,5,6]
arr.forEach((el)=>{
    console.log(el)      //arr pura function prameters ky ander store ho jata
})

// hum direct function bi lekh sakty hy or function ko  kisy variable ma store krwa kr bi lekh sakty hy

//                    <<<<<<<<<<<<( 2 )>>>>>>>>>>>>>>
//map method
let arry = [1,2,3,4,5,6]
arry.map((el)=>{
    console.log(el*el)      // el*2 for double
})
// map bilkul eachmethod ki trha hy
//                    <<<<<<<<<<<<( 3 )>>>>>>>>>>>>>>
//filter method
let array = [1,2,3,4,5,6];
let ans =array.filter((el)=>{
     return el%2==0;
})
console.log(ans)
// agr data filter krna  ho to filter  method use  hota
// filter kia hoya data new variable  may store kia jata hy

//                    <<<<<<<<<<<<( 4 )>>>>>>>>>>>>>>
//every method 

// ye method check krata hy ka sary element di 
// gai condition ky matabk true hy ya ni
//agr sary element true hoya yo ye return true krata hy 
// agr ik bi element flas hoya to ye return flas kry ga     same as && opertr
// matlab ye ek Boolean value return krta

let ar = [2,4,6,3];
let a =ar.every((e)=> e%2==0)       //matlb agr sary elemnt 2 sy devide ho jaye to condition true ho gi

// checking ki hoya data new vairable ma store krwaty hy

//                    <<<<<<<<<<<<( 5 )>>>>>>>>>>>>>>
//some method
//ye or operter ki trha hota hy 
// agr return true krta hy Lain
// agr sary elemnt di gai condition ky matbk flas ho to ye return flas kry ga
let aar = [1,3,5,2];
let b =aar.some((el)=> el%2==0)


//                    <<<<<<<<<<<<( 5 )>>>>>>>>>>>>>>
//reduce method
let aa = [1,2,3,4,5,5,5,6,2];
let sum = aa.reduce((acu,el) => acu+el) // acu = acu + el   matlb ye porna result store krta hy
console.log(sum)

//maxsimum value in arry
let a_r = [1,2,3,4,5,6,9];
let maxsimum = a_r.reduce((max,el)=> {
    if (el > max){
     return el;
    } else{
        return max;
    }
})
console.log(maxsimum)
//check all number that are dividable to 10 or not
let number = [1,2,3,4,4,5,6,7,6];
let mul = number.every((el) => (el%10==0)
)
console.log(mul)

//minimum value in arry
let aR = [2,3,4,4,5,6,7,6];
let result = aR.reduce((min,el) => {
      if(min < el){
        return min
      }else{
        return el
      }
    })
    console.log(result)