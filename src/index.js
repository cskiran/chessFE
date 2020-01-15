import {UserAuthentication} from './scripts/auth';
import "./styles/styles.css";
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

const authentication = new UserAuthentication();
function authenticateUser(e) {
    e.preventDefault();
    authentication.login(e.target.email.value, e.target.password.value).then(
        data => {
            if(data.headers.get('auth-token')){
                sessionStorage.setItem('auth-token',data.headers.get('auth-token'));
            }
        }
    ).catch(err => console.log(err));
}