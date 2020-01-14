const loginModal = document.querySelector('.login-btn');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.close');
const loginForm = document.querySelector('.login-form');

loginModal.addEventListener('click', showModal);

modalClose.addEventListener('click', closeModal);

loginForm.addEventListener('submit', authenticateUser);

function showModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

const authentication =  new UserAuthentication();
function  authenticateUser(e) {
    e.preventDefault();
    authentication.login(e.target.email.value,e.target.password.value).then(
        data => {
            console.log(data);
            console.log(data.headers.get('auth-token'));
        }
    );
}