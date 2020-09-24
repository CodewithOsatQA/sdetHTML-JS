
// let myPTag =document.getElementById("domP")
// myPTag.innerHTML ="Hi guys";
// myPTag.className="para1"
// // myPTag.id ="lastChance"
// myPTag.style="color:red;"
// {/* <p id="lastChance" class="para1" style="color:red;" >inner html</p> */}

// let heading = document.createElement("h2");
// heading.innerHTML="my h2 heading";
// {/* <h2>my h2 heading</h2> */}
// document.getElementById("domP").appendChild(heading);


// function changeThis(xfkdlslkfldlgfl){
//     xfkdlslkfldlgfl.innerHTML="oh no you touched me!"
// }
// function changeBack(xfkdlslkfldlgfl){
//     xfkdlslkfldlgfl.innerHTML="touch me"
// }

let button = document.querySelector("#butt1");

function callMe() {
  alert("Hi there Friends");
}

function alsoCallMe() {
  alert("How can I help?");
}
// SYNTAX: button.addEventListener(event-type, function-to-execute, bubbling?)
button.addEventListener("click", callMe, false);
button.addEventListener("click", alsoCallMe);


let myWindow = window.open("", "", "width=300,height=100");
myWindow.document.write("<p> Isn't this cool? </p>");
setTimeout(function () {
  myWindow.close();
}, 3000);

async function test(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('Done'),-1)
    });
    let result = await promise; // wait until the promise resolves
    console.log(result);
}
test();