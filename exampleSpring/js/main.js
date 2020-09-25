//this is the url we want
fetch('http://localhost:8082/flower/read') //1
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(myFlowers) {
        console.log("Here is my data",myFlowers);

        let table = document.querySelector("table");
        let data = Object.keys(myFlowers[0]);

        generateTableHead(table, data);
        generateTable(table, myFlowers);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
  let th2 =document.createElement("th");
  let text2 =document.createTextNode("Edit")
  th2.appendChild(text2)
  row.appendChild(th2)
  let th3 =document.createElement("th");
  let text3 =document.createTextNode("Del")
  th3.appendChild(text3)
  row.appendChild(th3)
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
    let newCell = row.insertCell();
    let myButt = document.createElement("a")
    myButt.innerHTML="View"
    myButt.href= "readone.html?"+element.id
    newCell.appendChild(myButt)
  }
}




// document.querySelector("form.empForm").addEventListener("submit", function (stop) {
//     stop.preventDefault();
//     let x = document.querySelector("form.empForm").elements;
//    let uName= x["userName"].value;

// console.log(uName)
// postData(uName)
// location.reload();

//   });

document.querySelector("form.delForm").addEventListener("submit", function (stop) {
    stop.preventDefault();
    let x = document.querySelector("form.delForm").elements;
   let idTODel= x["delItem"].value;
   let myNumber= x["myNum"].value;
   console.log("My nunber is",myNumber);
console.log(idTODel)
delData(idTODel)
location.reload();


  });

// function postData(userName){

//     const data = {
//         "body": userName,
//       }
//       console.log(data)
//   fetch("http://localhost:8080/api/notes", {
//       method: "POST",
//       // headers: {
//       //   "Content-type": " application/json;",
//       // },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(function (data) {
//         console.log("Request succeeded with JSON response", data);
//       })
//       .catch(function (error) {
//         console.log("Request failed", error);
//       });
      
// }
function delData(id){
let delID =parseInt(id);
console.log(typeof(delID));

     
  fetch("http://localhost:8082/flower/delete/"+delID, {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      }
    })
      .then(response => response.json())
      .then(function (data) {
        console.log("Request succeeded with JSON response", data);
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });
      
}

// // document.querySelector("a.myButton").addEventListener("submit", function (stop) {
// //     stop.preventDefault();
   

// //   });
// function delUser(id){
//  console.log(id)
// let delForms =document.getElementById("delFrom");
// var f = document.createElement("form");
// f.className="form-group"
// f.setAttribute('method',"post");
// f.setAttribute('action',"submit.php");

// var i = document.createElement("input"); //input element, text
// i.setAttribute('type',"text");
// i.setAttribute('name',"username");

// var s = document.createElement("input"); //input element, Submit button
// s.setAttribute('type',"submit");
// s.setAttribute('value',"Submit");
// s.className="btn btn-danger"

// let a =f.appendChild(i);
// let b= f.appendChild(s);
// delForms.appendChild(a)
// delForms.appendChild(b)
// document.getElementsByTagName('body')[0].appendChild(f);

// //and some more input elements here
// //and dont forget to add a submit button
// window.location.href="index.html"
// }



//     document.querySelector("form.empForm").addEventListener("submit", function (stop) {
//         stop.preventDefault();
//         let x = document.querySelector("form.empForm").elements;
    
//        let uID= x["userID"].value;
//        let uName= x["userName"].value;
//     console.log(uID)
//     console.log(uName)
//     postData(uID,uName)
//     location.reload();
    
//       });