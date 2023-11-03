//        async funtion
// The async funtion atomatically return a promis 
//it can work with both Promises and non-Promise values.

async function color(){
    // throw ("some promble") 
     return ("This is my random funtion");
}
color()
.then(()=>{
console.log("This is my random text")
return style()
return color()
})
.then(()=>{
    console.log("This is third then")
})

.catch(()=>{
    console.log("You'r writting is rong please try again")
})

function style(){
    setTimeout(()=>{
        console.log("this is my style")
    },2000)
   
}