

// function myFunc(a,b,c){
//     console.log(`just keep logging ${a+b+c}`);
//     return a+b;
// }
// function myFunc1(a,b,c){
//     console.log(`just keep logging ${a+b+c}`);
//     return a-b;
// }
// console.log("---")
// console.log(myFunc)

// // myFunc(10,5);
// // console.log("this one here"+myFunc(34567,45346))
// console.log(myFunc(4,5,5))
// console.log(myFunc1(4,5,5))


// function add(a,b) {
//     return a+b;
// }
// console.log(add(10,12));
// // Will give out of 22

// console.log(add);

// //function
// function hello(){
//     console.log("hey friends we are nearly done")
// }
// hello();
// //function exression
// let welcome = function(){
//     alert("Hello");
// };

// console.log(welcome());

// const getRectArea = function(width,height){
//     return width *height;
// }
// console.log(getRectArea(3,4))



// sayHi("John"); // Hello, John
// function sayHi(name) {
//   alert( `Hello, ${name}` );
// }

// sayHi2("John"); // error!

// let sayHi2 = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };

sayBye=()=>{
    return "hello world";
}
sayBye2 = (name, age)=>"hello" +name+"i am "+age;
sayBye3 = name=>"hello " +name;

console.log(sayBye());
console.log(sayBye2("john",29));
console.log(sayBye3("john"));