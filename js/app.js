var template = require('./template.hbs');

var http = new XMLHttpRequest();
http.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');

http.onload = function() {
  if(http.status >= 200 && http.status < 400) {
    var data = JSON.parse(http.responseText);
    creatHtml(data);
  }else {
    console.log("An Error has occured");
  }

  http.onerror = function() {
    console.log("Connection has faild");
  }
};

http.send();


function creatHtml(dataOnTheFly) {
  var petsContainer = document.getElementById('pets-container');
  petsContainer.innerHTML = template(dataOnTheFly);

}
