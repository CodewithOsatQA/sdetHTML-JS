fetch('http://jsonplaceholder.typicode.com/albums') //1
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data1) {
        console.log("here is my data",data1);
        let table = document.querySelector("table");
        let data = Object.keys(data1[0]);

        generateTableHead(table, data);
        generateTable(table, data1);
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
  let th1 = document.createElement("th");
  let text1 = document.createTextNode("Delete");
  th1.appendChild(text1);
  row.appendChild(th1);
  let th2 =document.createElement("th");
  let text2 =document.createTextNode("Edit")
  th2.appendChild(text2)
  row.appendChild(th2)
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
    // let cell1 = row.insertCell();
    // let text1 = document.createElement("a");
    // text1.innerHTML=("Delete")
    // text1.className= ("btn btn-danger")
    // text1.href="http://jsonplaceholder.typicode.com/comments/delete/"+element.id
    // cell1.appendChild(text1);
    let cell2 = row.insertCell();
    let text2 = document.createElement("a");
    text2.innerHTML=("View")
    text2.className= ("btn btn-info")
    text2.href="create.html?"+element.id
    cell2.appendChild(text2);
  }
}

const params = new URLSearchParams(window.location.search);

console.log(params)

for(const param of params){
  console.log(param);
}