const header = document.querySelector(".mainHeader")
const body = document.querySelector("body")
const btnStart = document.querySelector(".main__btn")
const mainSection = document.querySelector(".main   ")
const logoImg = document.querySelector(".logo__img")
const textWelcome = document.querySelector(".main__text")
const logoBig = document.querySelector(".main__logoBig")

function change() {
    header.style.padding = "34px 44px";
    mainSection.style.display = "flex";
    textWelcome.style.display = "none";
    btnStart.style.display = "none";
}

btnStart.addEventListener("click", () => {
    change()

    let logoBlock = document.createElement('div');
    logoBlock.innerHTML = `<div class="logo__blockImg">
                                <img class="logo__img" src="static/image/logo.png" alt="Логотип">
                            </div>
                            <h1 class="logo__title">project taganrog.arg</h1>
                           `
    logoBlock.classList.add('logo')
    header.appendChild(logoBlock)

    let regForm = document.createElement('div');
    regForm.innerHTML = `
                                <p class="login__title">Для продолжения <br>введите Вашу почту:</p>
                                <input class="login__input" type="text" placeholder="example@.ru">
                                <button class="login__Btn">Войти</button>
                        `;
    regForm.classList.add('login');
    mainSection.appendChild(regForm);
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