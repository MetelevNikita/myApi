const regBtn = document.getElementById("registration");

console.log(regBtn)

regBtn.addEventListener("click", (e) => {

  e.preventDefault();
  alert("You have successfully registered!");

  window.location.href = "registration.html";


})