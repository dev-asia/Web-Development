//adding h1
let h1 = document.createElement('h1');
h1.innerHTML= "<u>HTML STRUCTURE USING JAWA SCRIPT</u>";
document.querySelector("body").append(h1);

//adding img
let img = document.createElement("img");
img.setAttribute('src','Assets/Man.png');
document.querySelector("body").append(img)

//adding p
let p = document.createElement('p');
p.innerText="This is my praghraf using only jawa script";
document.querySelector("body").append(p);
  
//adding again p
let p2 = document.createElement("p");
p2.innerText="Hey I'm red!";
p2.style.color="red";
document.querySelector("body").append(p2)
  

//adding h3
let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
h3.style.color="blue"
document.querySelector("body").append(h3);

//adding div
let div = document.createElement('div');
div.innerHTML ="<h1>I'm in a div</h1> <p>MEE TOO!</p>";
div.classList.add("style");
document.querySelector("body").append(div);

