//Use of APIs
let url = "https://catfact.ninja/fact"
fetch(url)                     //send request to APIs
 .then((res)=>{
    console.log(res)
    return res.json();//convert response into json for ignore raw data
})
 .then((data) => {// if json convert response into json then it print
    console.log(data)
})
 .catch((err)=>{
    console.log("404 not found")
})



// we can do same work using async function and awaite keyword



 let urrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/digital';

async function useAPI(){
    try{
  req1=  await fetch(urrl);
  data = await req1.json()
  console.log(data)
}catch(e){
console.log("erro",e)
}
}
useAPI()