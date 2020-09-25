function getOne(id){
fetch('http://jsonplaceholder.typicode.com/comments/'+id) //1
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data1) {
        console.log("here i am ",data1);
        document.getElementById("inputPostID").value=data1.postId;
        document.getElementById("inputID").value=data1.id;
        document.getElementById("inputName").value=data1.name;
        document.getElementById("inputEmail").value=data1.email;
        document.getElementById("inputBody").value=data1.body;
        
      //  let postID = document.querySelector("table");
      //  let id = document.querySelector("table");
      //  let name = document.querySelector("table");
      //  let email = document.querySelector("table");
      //  let body = document.querySelector("table");
        // let data = Object.keys(data1[0]);

        // generateTableHead(table, data);
        // generateTable(table, data1);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);

  });
}

const params = new URLSearchParams(window.location.search);

for(const param of params){
  console.log(param);
  let x=param[0]
  console.log(x)
  getOne(x)
}

let table = document.querySelector("table");