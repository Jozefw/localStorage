var first= prompt("whats your first name");

var last= prompt("whats your last name");

localStorage.setItem('firstName',first);
localStorage.setItem('lastName',last);

console.log(localStorage.getItem("lastName"));

console.log(localStorage.getItem("firstName"));


var x = document.getElementById("fullName");

document.getElementById("fullName").innerHTML = localStorage.getItem("firstName");

var para = document.createElement("P");
var texty = document.createTextNode(localStorage.getItem("firstName"));
para.appendChild(texty);
x.appendChild(para);






