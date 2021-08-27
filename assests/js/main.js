const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showModal = document.querySelector('.modal');
const modalOverLay = document.querySelector('.modal__overlay');

function handleClickBtnLogin() {
    resetClass();
    showModal.classList.add('active');
    registerForm.classList.add('disable');
    loginForm.classList.add('active-default');
}

function handleClickBtnRegister() {
    resetClass();
    showModal.classList.add('active');
    loginForm.classList.add('disable');
    registerForm.classList.add('active-default');
}

function resetClass() {
    showModal.classList.remove('active');
    loginForm.classList.remove('disable');
    registerForm.classList.remove('disable');
}

modalOverLay.onclick = resetClass;
loginBtn.onclick = handleClickBtnLogin;
registerBtn.onclick = handleClickBtnRegister;

