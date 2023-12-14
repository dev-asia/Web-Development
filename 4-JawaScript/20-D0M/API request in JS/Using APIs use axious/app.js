// Axios.get() function is also used for send our request
//The benifits of this function is that we do not need to
//convert the respons into json()
let btn = document.querySelector("#btn");
let img = document.querySelector("img");

let url2 ="http://dog.ceo/api/breeds/image/random";


btn.addEventListener("click",async()=>{
   let link = await sendReq2();
   console.log(link)
   img.setAttribute("src",link)
})

async function sendReq2(){
  try{ 
    res = await axios.get(url2)
            
   return res.data.message ;
}
catch(e){
console.log("rong API request " , e)
}
}


//we can also send header with request
// const header = {headers: {Accept:"appliction/json"}};
// res = await axios.get(url2,header)

//                     ((((((((((((((2))))))))))))))


let fat = document.querySelector("#fact")
let p = document.querySelector("p");
fat.addEventListener("click",async()=>{
   let fact = await sendReq();
   console.log(fact)
    p.innerText =fact;
})

let url1 = "https://catfact.ninja/fact";
async function sendReq(){
  try{  res = await axios.get(url1)
      return res.data.fact;
}
catch(e){
console.log("rong API request " , e)
}
}


//                     ((((((((((((((3))))))))))))))
//search universities base on country

let searchBtn = document.querySelector("#search");
let input = document.querySelector("input");
let ul = document.querySelector("ul");



searchBtn.addEventListener("click",async()=>{
   state =input.value;
   console.log(state)
 let collage = await getCollage()
 console.log(collage)
  input.value=""
 ul.innerText=""
function show(){

   for(clg of collage){
   console.log(clg)
   li = document.createElement("li");
   li.innerText = clg.name;
   ul.append(li)

}}

show()
})

let url = "http://universities.hipolabs.com/search?country=India";


async function getCollage(){
   let res = await axios.get(url);
 return res.data
}






