const regForm = document.getElementById("regForm");

console.log(regForm)

const urlReg = 'http://localhost:9000/api/v1/registration'

regForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {


    const name = document.getElementById("name").value;
    const email  = document.getElementById("email").value;
    const pasword = document.getElementById("password").value;

    const formData = new FormData(regForm);
    console.log(...formData)

    const respone = await fetch(urlReg, {
      method: "POST",
      headers: {
        'Content-Type':  'application/json',
      },
      body:  JSON.stringify({name:  name,
       email:  email,
       password:  pasword
     }),
    })

  } catch (error) {

    console.log(error)

  }
})