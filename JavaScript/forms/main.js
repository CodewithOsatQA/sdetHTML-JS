// function getEl(){

// }

//looks at the URL and get anything after?
const params = new URLSearchParams(window.location.search)
//
let firstName = params.get("firstName")
console.log(firstName)
findById(firstName);





let lastName = params.get("lastName")
console.log(lastName)
let pwd = params.get("myPassword")
console.log(pwd)

for (const param of params) {
  console.log(param)
}

function findById(id){
fetch('http://jsonplaceholder.typicode.com/posts/'+id)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log("this is live data",data);
        let heading =document.createElement("h1");
        heading.innerHTML=data;
        document.body.appendChild(heading);

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}