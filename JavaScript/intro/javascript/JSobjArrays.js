//empty Array()
let myArray = Array();
// console.log(typeof(myArray));
// console.log(myArray)

let myArray2 = Array(20);
// console.log(myArray2)

let myArray3 = Array("Fanta","Coke","Pepsi","7up", "Sprite");
// console.log(myArray3);
// console.log(myArray3.length);
// console.log(myArray3.sort());
// console.log("reverse "+myArray3.reverse());
// console.log(myArray3.push("tango"));
// console.log(myArray3);
// console.log(myArray3.pop());
// console.log(myArray3);
// console.log(myArray3.unshift("water"));
// console.log(myArray3);
// console.log(myArray3.shift());
// console.log(myArray3);
// console.log(myArray3);


// short hand way of creating an array
let myShortArray = [1,"2",3,4,5,6,7];
// console.log(myShortArray);

// console.log(myArray3[0]);
// console.log(myArray3[1]);
// console.log(myArray3[3]);

// setting i=0 
//the size of the array

//for loop
// for(let i =0; i<myArray3.length;i++){
//     console.log(myArray3[i]);
// }

// For each loop
// let myArray4 = [1,35,67,87,233,768]
// for (myVals of myArray4){
//     console.log(myVals);
// }

// Objects

let VinsCar = new Object();
VinsCar["Make"] = "Audi";
VinsCar["Model"] = "A5";
VinsCar["Reg"]= "W8M8";

// console.log(VinsCar);
// console.log(VinsCar.Make);
// console.log(VinsCar.Model);
// console.log(VinsCar.Reg);

// VinsCar.NoDoors =2;
// console.log(VinsCar.NoDoors);
// console.log(VinsCar);

// // object literal notation 
// let qaCar = {Make:"QA",Model:"some model", Reg:"some plate"};
// console.log(qaCar);

let carPark =
{mycarpark:[
    {id:"1",day:"Wednesday"},
    {Make:"merc",Model:"a45", Reg:"1234"},
    {Make:"bmw",Model:"325i", Reg:"4321"}
]
};
console.log(carPark)

for(let i =0;i<carPark.length;i++){
    console.log(carPark[i]);
    for(let a in carPark[i]){
        // console.log(`The Key is ${a}`);
        console.log(`${carPark[i][a]}`)
    }
}
// for(let i =0;i<carPark.length;i++){
//     console.log(carPark[i]);
// }


// // let dogName = "jim";
// // let dogAge = 13;
// // let dogRunSpeed = 10;
// let myPet ={
//     let strideLength :0,
//     dogAge,
//     dogRunSpeed,
//     dogColor="yellow",
//     dogSpeed(){
//         this.strideLength = this.dogRunSpeed*2
//     }
// }
// console.log(myPet.dogSpeed());
// // console.log(myPet);


let power = 200
let speed=0;
let myCar = {
    speed,
    power,
    //methods
    accelerate() { this.speed = this.power / 2 },
    topSpeed(){this.speed = this.power *this.speed}
}


    console.log(myCar.speed); // This line will return 0.
    myCar.accelerate(); // Call this method  
    console.log(myCar.speed); //The value of speed will now be 100  
    myCar.topSpeed(); // Call this method  
    console.log(myCar.speed); //The value of speed will now be 100  




console.log(myCar);

console.log(myCar);

console.log(myCar);

console.log(myCar);


let myJSONObject = {
    "searchResults": [
        {
            "productName": "Aniseed Syrup",
            "unitPrice": 10,
            "barcode":{
                1:"abc",
                2:"cde",
                3:"fgh"
            }
        },
        {
            "productName": "Alice Mutton",
            "unitPrice": 39
        }
    ]
};


// console.log(myJSONObject)

// console.log(JSON.stringify(myJSONObject));
console.log(JSON.parse(myJSONObject));

// console.log(myJSONObject.searchResults[0].barcode)