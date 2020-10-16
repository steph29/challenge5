// Grab the value on textField

var send = document.getElementById("submit");

send.addEventListener("click", function () {
  var text = document.getElementById("textField").value;
  if (text.length < 1) {
    var result = document.getElementById("result");
    result.innerHTML = "Please provide a link";
    $(".text").css("border", "1px solid red");
  } else {
    alert(text);
    console.log(text);
    console.dir(text);
  }
});
send.addEventListener("keyup", function (e) {
  var text = document.getElementById("textField");
  if (e.which === 13) {
    alert("Vous avez tapé sur la touche Entré");
  }
});

//  turn the value on the magic machine

var url = "https://api-ssl.bitly.com/v4/shorten";
var key = "f1bba0968e731be357e646c2774937e0dbb40e25";
// Display the result on screen
