// Grab the value on textField

var send = document.getElementById("checkURL");
send.addEventListener("click", function () {
  var text = document.getElementById("textField").value;
  if (text.length < 1) {
    var result = document.getElementById("result");
    result.innerHTML = "Please provide a link";
    $(".text").css("border", "1px solid red");
  } else {
    checkURLButton();
  }
});
var pressEnter = document.getElementById("textField");
pressEnter.addEventListener("keyup", function (e) {
  var text = document.querySelector("input").value;
  if (e.key === "Enter") {
    console.log(text);
    checkURLButton();
  }
});

// Fetch API 

var url = "https://api-ssl.bitly.com/v4/shorten";
const headers = {
    Authorization: "Bearer f1bba0968e731be357e646c2774937e0dbb40e25",
    "Content-Type": "application/json",
  };
const body = JSON.stringify({
    long_url: "https://dev.bitly.com",
    domain: "bit.ly",
    
  });
  const init = {
    method : "POST",
    headers : headers,
    body : body,
   };

function success(){
  console.log("Votre requête va aboutir");
  manageResearch();
}
function error(){
  console.log("Votre requête n'a pas pu aboutir");
}


function checkURLButton(){
  const checkURL = document.getElementById("checkURL").value;
  return new Promise((success, error)=>{
    if(!undefined === checkURL){
      success();
    }else{
      error();
    }

  });
}

function manageResearch() {
  fetch(url, init)
    .then((response) => {
      console.log(response);
      const data = response.json();
      data.then((dataJson) => {
        console.log(dataJson);
      });
    })
    .then((data)=>{
      fillResults(data)
    })

    .catch((error) => console.log(error));
}



// Return the response into the DOM

function fillsResult(data){
let list = document.getElementById("result");
list.innerHTML = "";
if(!undefined === data.Response){
  data.Response.forEach(function(element) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(element.properties.label));
    list.appendChild(li);
  });
}
}
