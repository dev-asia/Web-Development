//agr humy millions students ky lia same desgine ka object
// ready kr ho to hum 1 jaga os object ka temlets/blue print
// bna ky rakh ly gy  
// phir millions students os ko use kr skhy gy 
//os object ko use krna instence khlata hy

//There are three method of making blue print
//1: foctory function
function Persone(name,age,marks){
    const data = {
        name : name,
        age:age,
        marks:marks,
    }
    return data;
}

let student1 = Persone("asia",20,777)//copy: hr bar memory ky ander alg sy jagha ly ga//refrence alg hona
let studend2 = Persone("arooj",19,888)//copy: hr bar memory ky ander alg sy jagha ly ga//refrence alg hona



//2 New opertor
//Dos'n use return & we write function name with capital leter
function Person(name,age,marks){
    this.name = name
    this.age = age
    this.marks = marks

}
Persone.prototype.talk= function (){
    console.log(`hello i am  ${this.name}`)//humy koi bi function bnana ho to bher banana prta hy
}


let stud1 = new Person("asia",44,88)//: hr bar memory ky ander alg sy jagha nahi lyga
let stud2 = new Person("amna",43,88)//: hr bar memory ky ander alg sy jagha nahi lyga
let stud3 = new Person("arooj",46,88)//: hr bar memory ky ander alg sy jagha nahi lyga

console.log(stud1,stud2,stud3)



//################## (This is the best method of making blue print) #################

//3: class constructor
class Prsone {
    constructor(name, age, marks) {
        this.name = name
        this.age = age
        this.marks = marks
    }
    talk(){
        console.log(`I am ${this.name}`)
    }
}

let st1 = new Persone("tyba",33,19)      //dos't make copy: matlab same refrence pr data store hona
let st2 = new Persone("minha",37,17)     //dos't make copy
let st3 = new Persone("aiman",88,21)     //dos't make copy
let st4 = new Persone("suba",99,22)      //dos't make copy
console.log(st1,st2,st3,st4)


//banifits of class construtor 
//1: dons't make copy of instence object
//2: we don't need to write extra function inside of the blue prits 





//Part 2:
//Inheritence
//agr do ya do sy zyeda clesses ki kuch property same ho
//To hum same property wali ek class bna skty hy
//phir jis class ko wo property ki zroort ho gi wo os class
//sy property ko inherit kr ly ki
//1: keyword(extent) is use for inherit the class
//2: keyword(super) is use for inherit the construtor

//Note;
//if the parent class function and child class function
//is same then always execute the child class function



class parentClass {
    constructor(name,age) {
        this.name = name
        this.age = age
     
    }
    talk(){
        console.log(`I am ${this.name}`)
    }
}


class Childclass1 extends parentClass{ //inhrit class form parent class
    constructor(name,age,work,pay){
        super(name,age)    //inherit construtor from parent class
        this.work = work
        this.pay = pay    
    }
}
let data1 = new Childclass1("asia",20,"coding",0);
console.log(data1)



class Childclass2 extends parentClass{ //inhrit class form parent class
    constructor(name,age,work,pay){
        super(name,age)    //inherit construtor from parent class
        this.work = work
        this.pay = pay    
    }
}
let data2 = new Childclass2("arooj",19,"coding",5000);
console.log(data2)


