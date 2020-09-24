
// 'use strict';

// // elem =document.getElementById("demo");
// // elem.innerHTML =x;
// // // x =5;
// // var x;
// // var y;
// // var b;

// // var z;
// // z=5
// // elem1 =document.getElementById("demo2");
// // elem1.innerHTML =z;


// // carName="audi";
// // alert(carName);
// // let carName;

// var x =5;
// var y=7;
// let elem =document.getElementById("demo");
// elem.innerHTML =x+"and"+y; // 

// let a=5;
// a=6;

// b=7;
// let elem1 =document.getElementById("demo2");
// elem1.innerHTML =a+"and"+b;
// var b;

// class Pet {
//     constructor(name,age) {
//       this._name = name;
//       this._age = age;
//       this._eaten = false;
//     }
//     hungry() {
//         //! mean not
//         //this.-eaten =false
//         // not true
//       if (!this._eaten) {
//           console.log(`${this._name} is hungry`);
//     } else {
//         console.log(`${this._name} has eaten!`);
//       }
//     }
//     eating() {
//       console.log(`${this._name} is eating!`);
//       this._eaten = true;
//     }
  
//     speak() {
//       console.log(`${this._name} says woof`);
//     }
//     howOld(){
//         console.log(`i am ${this._age} years old!`)
//     }
//   }
  
// //   let pup = new Pet("Pup-eroni",4);
//   let myDog = new Pet("sir-borks-alot",4)
// //   let mydogs =new Pet("jk-growling",10)
// // //   pup.hungry(); // Pup-eroni is hungry
// // //   pup.eating(); // Pup-eroni is eating
// // //   pup.speak(); // Pup-eroni says hello
// // //   pup.hungry(); // Pup-eroni has eaten!

//   myDog.speak();
//   myDog.hungry();
//   myDog.eating();
//   myDog.hungry();
//   mydogs.howOld();



//   class Dog extends Pet {
//     constructor(name,age,tricks) {
//       super(name,age); // Calls the super constructor and assigns the attribute.
//       this._tricks = tricks;
//     }
//     play() {
//       console.log(`${this._name} wants to show you his tricks!`);
//     }
  
//     tricks() {
//       console.log(`${this._name} can do a ${this._tricks}`);
//     }
//     speak() {
//       super.speak();
//       console.log(`WOOOOOOOOOF`); // Overrides parent function call();
//     }
//   }
  
//   let doggy = new Dog("Bark Wahlberg", 21,"Backflip");
//   doggy.hungry();
//   doggy.speak();
//   doggy.tricks()
//   doggy.howOld();

// var foo = 1; 
//  function bar(){
//      if(!foo){
//          var foo = 10;
//      }
//      alert(foo);
//  }
//  bar();

//  Closures have access to outer function's variables even after the outer function returns

// function celebrityName(firstName) {
//     let nameIntro = "Celebrity is ";
//     // Inner function has access to outer function's variables, including parameters
//     function lastName(surname) {
//       return `${nameIntro} ${firstName} ${surname}`;
//             //nameIntro=Celebrity name is
//             // firstName = michael

//     }
//     return lastName;
//   }
  
//   let mjName = celebrityName("Michael"); // celebrityName outer function has returned
  
//   console.log("hii",mjName);
  
//   // Closure (lastName) is called after outer function has returned
//   // Yet, closure still has access to outer function's vars and params
//   let mjNameFull = mjName("Jackson");
  
//   console.log(mjNameFull); // Celebrity is Michael Jackson


//   function celebrityID() {
//     let celebrityID = 999;
//     return {
//       getID: function () {
//         return celebrityID;
//       },
//       setID: function (newID) {
//         celebrityID = newID;
//       },
//     };
//   }
  
//   let mjID = celebrityID();

//   let returnedID = mjID.getID();
//   console.log(`The initial value of getID() is ${returnedID}`); // 999
//   mjID.setID(567);
//   returnedID = mjID.getID();
//   console.log(`The value of getID now is ${returnedID}`); // 567


    //   //we create a new promise
    //   let newProm = new Promise((resolve,reject)=>{
    //     let a = 1+1;
    //     if (a==2){
    //         //we say what happens in the success outcome
    //         resolve("Success we want");
    //     }else{
    //         //we say what happens in the reject outcome
    //         reject("Failed i dont want");
    //     }
    // })

    // //we then pass the value from resolve or reject and we set it to message.
    // //.then() is executed if Fulfilled/successful.
    // newProm.then((message)=>{
    //     console.log(`This is in the then block and the status is: ${message}`);
    //     //.catch() is executed if rejected/failed.
    // }).catch((message)=>{
    //     console.log(`This is in the catch block and the status is: ${message}`);
    // //.then can be chained and will execute regardless of the outcome.
    // }).then(()=>{
    //     console.log("I will take place regardless of what happened before.");
    // })


    // function greeting(name) {
    //     //Creates an alert(pop-up box) which says hello and appends the value of name.
    //     alert('Hello ' + name);
    //   }
    //   function hello(name){
    //       alert("hellooooooooooooooo"+name);
    //   }
    //   function processUserInput(a,b) {
    //   //A simple user input box appears on the browser that take a value and assigns it to name
    //     let name = prompt('Please enter your name.');
    //     // we then pass the `name` variable to the callback function which will be passed to greeting.
    //     // greeting(name)
    //     a(name);
    //     b(name);

    //   }
    //   //Call the function `processUserInput( )` and in the brackets we pass the function `greeting`.
    //   processUserInput(greeting,hello);
    // //   processUserInput(hello);


    // Cookies

    // document.cookie = "username=Donald Tramp; expires=Thu, 18 Dec 2021 12:00:00 UTC";

    // let myCookie = document.cookie;
    // console.log(myCookie)
        
    // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    // let myCookie1 = document.cookie;
    // console.log(myCookie1)


    function setCookie(nameOfCookie, cookievalue, exdays) {
        let date = new Date();
        console.log(date.getDate()+" "+date.getFullYear());
        date.setTime(date.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ date.toUTCString();
        // console.log()
        document.cookie = nameOfCookie + "=" +"name:" + cookievalue + ";" + expires + ";path=/";
      }
      
      //We call it as so
      setCookie("myYummyCookie","Donald Tramp", "2");