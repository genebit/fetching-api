console.log('API link: https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
console.log('Copy and paste the link to fetch random data');

let inputfield = document.getElementById('url');
let fetchButton = document.getElementById('fetch-button');
let output = document.getElementById('output');

let url;

fetchButton.onclick = function () {
     url = inputfield.value;

     var fieldNotEmpty = (url !== '');

     if (fieldNotEmpty) {
          console.log('Fetching...');
          fetch(url)
               .then((response) => response.json())
               .then((user) => {
                    console.log('Fetched');
                    
                    var randomUser = JSON.parse(JSON.stringify(user[0]));
                    var first = 'FIRST NAME:  ' + randomUser.first + '<br><br>';
                    var last = 'LAST NAME:  ' + randomUser.last + '<br><br>';
                    var email = 'EMAIL:  ' + randomUser.email + '<br><br>';
                    var address = 'ADDRESS:  ' + randomUser.address + '<br><br>';
                    var created = 'CREATED:  ' + randomUser.created + '<br><br>';

                    output.innerHTML = first + last + email + address + created;
               })
               .catch(cause => {
                    console.error('Fetching Error: ' + cause);
               });
     } else {
          console.warn('Input field is empty.');
     }
}