// document.write("helloooooo");
// let paras = document.querySelectorAll('p');
// let i =0;
// for(let p of paras){
//     p.innerHTML=("hello friends")
//     p.className="magic";
//     i++
//     p.id=1+i
// }

// let firstDiv = document.querySelector('div');
// firstDiv.style.color = 'red';

// document.getElementById("myp").innerHTML ="value";

// document.write(Date());

// We create the html element we want
let heading = document.createElement("h1")
//we want to set the text of the element
heading.innerHTML ="this is my new heading.";
document.body.appendChild(heading);

let para = document.createElement("p")
para.innerHTML ="some text";
document.body.appendChild(para)

let aTag = document.createElement('a')
aTag.innerHTML ="click me";
aTag.href="https://www.google.com"
document.body.appendChild(aTag);

