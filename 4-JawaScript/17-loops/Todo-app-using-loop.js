
let todo=[];
req=prompt("Please enter your choice");

while(true){
    req=prompt("Please enter your choice");

    if (req=="add"){
      let task=prompt("please enter added item"); 
      todo.push(task)
        console.log("task added")
      
    }
    else if(req=="delete"){
        del= parseInt (prompt("please inter index number"))  
        todo.splice(del,1)
        console.log("your item is deleted")
    }

    else if(req=="list"){   // if we only print the list of arry then we use (for of loop)
                            // if we print both index number and list of array then we use (for loop)
    for(i=0;i<todo.length;i++){
        console.log(i,todo[i])
        }
    }

    else if(req=="quit"){
        console.log("You quiting the todo app")
        break
    }
  
    else{
        console.log("wrong request")
    }
}
