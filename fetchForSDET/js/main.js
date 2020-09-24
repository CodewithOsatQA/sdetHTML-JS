// fetch the following URL
fetch('http://jsonplaceholder.typicode.com/posts')
  .then(
    function(response) {
        //if we get anything that is not 200 then this will execute
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status+" "+response.statusText);
        return;
      }
      //IF WE GET 200 THIS WILL EXECUTE
      // Examine the text in the response
      response.json().then(function(data) {
        console.log("we are here",data);
        let p = document.createElement("p")
        p.innerHTML =data[0].userId + "       title"+data[0].title+ " body:"+data[0].body;
        document.body.appendChild(p);
        
      });
    }
  )
  //This will only happen if there is an issue with js fetch code
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });