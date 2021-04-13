let inputfield = document.getElementById('url');
let fetch_button = document.getElementById('fetch-button');
let output = document.getElementById('output');

var url;

fetch_button.onclick = function () {
     url = inputfield.value;

     fetch(url)
          .then((response) => response.json())
          .then((user) => {
               for (var i = 0; i < user.length; i++) {
                    console.log(user[i]);
                    output.innerHTML = JSON.stringify(user[i]);
               }
          })
          .catch(cause => {
               console.error('Fetching Error: ' + cause);
          });
}