const myArr = [1,2,3,4,5,6,8,9,10,11,12,13];
//

const [a,,b,...rest] = myArr;
console.log(a)//1
console.log(b)//3
console.log(rest)
console.log(myArr[1])

let car ={
    Make:"bmw",
    model:"m3",
    reg:"W8M8",
    engine:"3lt",
    power:385,
    noDoors:2
}
// let {Make,model,...moreCarStuff} = car;
let {Make,model,noDoors=null} = car;
console.log(`my car is a ${Make} ${model} and my car has ${noDoors} doors`);
// console.log(moreCarStuff)


let red = 100;
let green = 200;
let blue = 50;

const rgb = [200, 255, 100];
[red] = rgb;

console.log(`R: ${red}, G: ${green}, B: ${blue}`);
//output: R: 200, G: 255, B: 50

const student = {
    name: 'John Doe',
    age: 16,
    marks: {
        maths: 74,
        english: 63
    }
};
const { name, marks: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Science.`);
//output: John Doe scored 74 in Maths and 50 in Science.

