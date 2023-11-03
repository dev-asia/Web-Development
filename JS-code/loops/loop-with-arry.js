//for of loop
let furits =["apple","banana","mango","cherry"];
for (any of furits){   //furits variable ky ander jo bi items ho wo any variable may stor ho kr list bn jaye
    console.log(any);  
}
//nested for of loop
let furit =["apple","banana","mango","cherry"];
for (li of furit){   
    for(l of li){      //ager hum ny list ky ander bi list banani ho 
        console.log(l)
    }

}


//loop with arry
let ary =["asia","amna","kirn","muryam","arooj","fatima","kalsoom"];
for (i =0; i<ary.length;i++){
    console.log(i,ary[i])   //index number ki jaga ek varibal diya hy jo hr br update ho kr change ho ga

}


//loop with nested arry
let student=[['asia',243],['arooj',262],['attika',389]];
for (i =0; i<student.length; i++){
    console.log("student info ",i); 
     for(j = 0; j < student[i].length; j++){   // i variable ky ander index number store kiya hy jo hr bar update ho kr change ho gy
        console.log(student[i][j])
     }                                      
}

// Question no 1:delet num=2 in arry
let a=[1,2,3,4,5,6,2,3];
let num=2;
for(i=0 ;i<a.length; i++){       //stor all index number in variable i for accsessing the item 
    if(a[i]==num){            //jasy hi a equl ho num ky wasye a sy splice  ho jate item
        a.splice(i,1)  
}
}
console.log(a)
    
//Question no 2:
// print count
let nm = 287152;
let lenth=nm.toString();
console.log(lenth.length);

//Question no 3:
//print thier sum
let no= [2,8,7,1,5,2];
sum=0;
for (i=0; i<no.length; i++){
   sum = no[i]+sum ;
  
}  
console.log(sum) 

//Question no 4: 
//print largest number
let arr=[1,2,4,6,8];
let lgest= Math.max(...arr);
console.log(lgest)

//Question no 5: 
//print factoril of 4
let fc=4;
let n=1;
for (i=1; i<=fc;i++){      //n=n*i  
    n=n*i                  //1=1*1
}                          //1=1*2
                           //2=2*3
                           //6=6*4
console.log(`The factorial ${fc} is ${n}`)



