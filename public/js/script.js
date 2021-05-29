const header = document.querySelector(".header")
const body = document.querySelector("body")
const btnStart = document.querySelector(".main__btnStart")
const mainSection = document.querySelector(".main")
const logoImg = document.querySelector(".logo__img")

btnStart.addEventListener("click", () => {
    // header.style.paddingBottom = "34px";
    btnStart.style.display = "none";
    let regForm = document.createElement('div');
    regForm.innerHTML = `
                              <section class="main">
                                <p class="login__title">Для продолжения <br>введите Вашу почту:</p>
                                <input class="login__input" type="text" placeholder="example@.ru">
                                <button class="login__Btn">Войти</button>
                              </section>
                        `;
    regForm.classList.add('login');
    body.appendChild(regForm);

    // logoImg.style.width = "75%";
    // logoImg.style.height = "80%";
    logo.style.width = "222px";
    logo.style.height = "188px";

})

// setTimeout(() => {
//     let inputLogin = document.querySelector(".login__input");
//     // let val = inputLogin.value;
//     let btnLogin = document.querySelector(".login__Btn");
//     btnLogin.addEventListener("click", () => {
//         let response = fetch(`http://localhost:3000/auth/login?email=${val}&password=12412`, {
//             method: "POST"
//         })
//     });
// }, 5000)

// url: http://localhost:3000/auth/login?email=bethesda.@gmail.com&password=12412