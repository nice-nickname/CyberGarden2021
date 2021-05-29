const header = document.querySelector(".header")
const btnStart = document.querySelector(".main__btnStart")
const mainSection = document.querySelector(".main")
const logo = document.querySelector(".logo")
const logoImg = document.querySelector(".logo__img")

btnStart.addEventListener("click", () => {
    header.style.paddingBottom = "34px";
    btnStart.style.display = "none";
    let regForm = document.createElement('div');
    regForm.innerHTML = `
                              <p class="login__Title">Для продолжения <br>введите Вашу почту:</p>
                              <input class="login__input" type="text" placeholder="example@.ru">
                              <button class="login__Btn">Войти</button>
                        `;
    regForm.classList.add('login');
    mainSection.appendChild(regForm);

    // logoImg.style.width = "75%";
    // logoImg.style.height = "80%";
    logo.style.width = "222px";
    logo.style.height = "188px";

})

setTimeout(() => {
    let inputLogin = document.querySelector(".login__input");
    let val = inputLogin.value;
    let btnLogin = document.querySelector(".login__Btn");
    console.log(btnLogin, "dfdf");
    btnLogin.addEventListener("click", () => {
        if (val === "логин") {
            let startText = document.createElement('div');
            startText.innerHTML = `<p>Добро пожаловать в наш увлекательный проект в ARG формате, для Вас был разработан совершенно новый способ познакомиться с городом Таганрог. Для начала, мы расскажем, что в основу нашего логотипа была взята схема-план города, утвержденная в **** году, добавь эти числа к названию страницы, чтобы перейти на следующий этап</p>`;
            startText.classList.add('.main__text');
            mainSection.appendChild(startText)
        } else {
            val = 'Пользователь не найден';
        }
    });
}, 5000)

