var first= prompt("whats your first name");

var last= prompt("whats your last name");

localStorage.setItem('firstName',first);
localStorage.setItem('lastName',last);

console.log(localStorage.getItem("lastName"));

console.log(localStorage.getItem("firstName"));
var x = document.getElementsByClassName("fullname");
console.log(x);
x.innerHTML = localStorage.getItem("firstName");