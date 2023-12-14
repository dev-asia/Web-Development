//object litrels may value compair ni hoti srif refrence compair hota hy
let post={
//keys  :   values
username:"Asia Aulakh",
content:"This is my empty string",
like:88,
repost:12,
tags:["@delta","apnacollege"],
null:12
};
console.log(post)
            //OBJECT LITRELTS Method
            
           // accessing values           
console.log(post["tags"]) //first method          
console.log(post.tags)   //second method


         // replace values
console.log(post["tags"]="What is your real porblem")  //first method
console.log(post.tags="this is my content")       //second method


        //add new pair in object litrels
console.log(post.new="Add something in object litrels")
//ager new(key) post ky ander hoi to replace ho jaye gi
//or ager na hoi to phir add ho jaye gi


       //Delet value
console.log(delete post.like)
console.log(delete post.username)
//************************************************************************* */

//                           Object of object
let info={
asia:
    {
      marks:768,
      grade:'B',
      city:"fortabbas"    
    },
amna:
   { 
        marks:768,
        grade:'A+',
        city:" Karchi"
   },
arooj:
   {
        marks:800,
        grade:'A',
        city:"Lahour"
   }

};                 
//              Array of object
let arry=[
       {
        marks:768,
        grade:'B',
        city:"fortabbas"    
       },

       {
        marks:768,
        grade:'B',
        city:"fortabbas"    
       }, 
         {
         marks:768,
         grade:'B',
        city:"fortabbas"    
        },
];
//********************************************************************** */
           //print only name of car
let car={
   name:"farari",
   model:2000,
   color:"red"
};
console.log(car.name)
//******************************************************************** */
       //replace the value of city and add new property name as country
let person={
name:"asia",
age:20,
city:"fortabbas"
};
console.log(person)
console.log(person.city="New York")
console.log(person.country="United state")
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//
//                           Math object
Math.abs(n)//return absulte value
Math.pow(2,5)//retrun power of number 2   (2*2*2*2*2) 
Math.floor(n)//rounted from nearest smallest integers
Math.ceil(n)//rounted from nearest largest integers
Math.random()//return random value batween(0-1)
//************************************************************************ */
//gentreat 1 to 10 random numbers
Math.floor(Math.random()*10)+1

//gentreat 1 to 5 random numbers
Math.floor(Math.random()*5)+1

//gentreat 10 to 20 random numbers
Math.floor(Math.random()*10)+10

//gentreat 1 to 6 random numbers
Math.floor(Math.random()*6)+1
