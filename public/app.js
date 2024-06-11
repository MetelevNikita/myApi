const form = document.getElementById('loginForm')


const loginURL = 'http://localhost:9000/api/v1/login'


form.addEventListener('submit', async (e) => {

  e.preventDefault();


  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;


  const responce = await fetch(loginURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({login: login, password: password})
  })


  const data = await responce.json();
  console.log(data)
  return data;

})

