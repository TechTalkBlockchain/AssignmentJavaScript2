// var el = document.getElementById("hello")
// el.innerHTML = "different text"
// el.style.color = "grey"


var div = document.getElementById("hello");
div.style.backgroundColor = "grey"
div.style.height = "100px"
div.style.width = "100px"
div.style.padding = "50px 50px 60px 50px"
div.style.borderRadius = "20px"
div.style.boxShadow = "black 5px 5px 10px"
var p = document.createElement("p");
p.style.color = "white"
p.style.fontSize = "20px"
p.style.fontStyle = "italic"

var text = "Intorduction To DOM"
p.innerHTML = text;
div.appendChild(p);
