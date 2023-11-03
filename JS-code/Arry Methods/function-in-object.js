//function in object
let obj={
    name:"asia",
    age:"20",
    key:function fun(){//storing function in key and we access function using key
        console.log("this is my first")
    }
}
//short hand  function in object without using key
let obje={
    name:"asia",
    age:"20",
    fun () {         //without store function in key.Now we direct access to function using its function name
        console.log("this is my first")
    }
}


//              this key-word


//agr hum function ky ander kesi object ki property use krna chaty hy
//to es ky lia this keyword use ho ga 
//q ky this keword ky ander sara object store hota hy
//hum direct object ka name bi use kr sakty hy pr wo suitable ni hoga
let objec={
    name:"asia",
    age:"20",
    fun () {         
        console.log("this is my first")
        console.log(`My name is ${obje.name}`)//using object name
        console.log(`My name is ${this.name}`)//using this keyword
    }
}