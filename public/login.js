const regBtn = document.getElementById("registration");

console.log(regBtn)

regBtn.addEventListener("click", (e) => {

  e.preventDefault();
  console.log("clicked");
  window.location.href = "/registration";


})