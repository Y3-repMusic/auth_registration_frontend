const button = document.querySelector(".btn");
const login = document.querySelector(".login");
const pass = document.querySelector(".pass");
const url = "auth-registration-backend.vercel.app"
// const savedUsers = [];

button.addEventListener("click", function (event) {
  event.preventDefault();

  const newUser = {
    email: login.value,
    password: pass.value,
    date: new Date().toLocaleString(),
  };
  const response = fetch(`https://${url}/register`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  response
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      window.location.href = "auth.html";
    });

  // for (let i = 0; i < savedUsers.length; i++) {
  //   const user = savedUsers[i];
  //   if (user.login == newUser.login) {
  //     alert("Такой логин уже зарегистрирован на сайте");
  //     return;
  //   }
  // }

  // savedUsers.push(newUser);
  //"index_two.html"
  // window.location.href = "index_two.html"
});

fetch(`https://${url}/users`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//admin
//admin пароль от sql
//authregistrationbackend-production.up.railway.app
