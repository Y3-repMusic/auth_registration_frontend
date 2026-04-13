const UserLogin = document.querySelector("#username");
const UserPass = document.querySelector("#password");
const button_two = document.querySelector(".btn_two");
const savedUsers = [];

button_two.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(UserLogin.value.length,UserPass.value.length)
  if (UserLogin.value.length > 0 && UserPass.value.length > 0) {
    const result = fetch("http://localhost:3000/autologin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: UserLogin.value,
        password: UserPass.value,
      }),
    });

    result
      .then((res) => {
        return res.json();
      })
      .then((info) => {
        console.log(info);
        if (info.message == "успешная авторизация") {
          window.location.href = "main.html";
        } else if (info.eror == "Не правельный пароль") {
          alert("вы ввели не правельный пароль");
        } else {
          alert("пользователя с таким email не существует");
        }
      });
  }else{
    alert("Заполните данные для входа")
  }
});

//CRUD
// email Roman | password 123456789
