const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

const btnpopup = document.querySelector('.btnlogin-popup');

const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click', (e) => {
    e.preventDefault(); // prevent page jump
    wrapper.classList.add('active');  
});

loginlink.addEventListener('click', (e) => {
    e.preventDefault(); // prevent page jump
    wrapper.classList.remove('active'); 
});

btnpopup.addEventListener('click', (e) => {
    // e.preventDefault(); // prevent page jump
    wrapper.classList.add('active-popup');  
});

iconclose.addEventListener('click', (e) => {
    // e.preventDefault(); // prevent page jump
    wrapper.classList.remove('active-popup');  
});
