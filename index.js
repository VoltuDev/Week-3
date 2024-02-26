const btnSubmit = document.querySelector('button');
const usernameInputField = document.querySelector('#username');
const userAgeInputField = document.querySelector('#age');
const loginMessage = document.querySelector('.login-message');

btnSubmit.addEventListener('click', () => {
    const usernameInput = usernameInputField.value.toLowerCase();
    const userAgeInput = userAgeInputField.value;


    if(usernameInput !== 'Harambe' || userAgeInput !== '11') {
        loginMessage.textContent = 'Login sucessful';
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = 'Incorrect';
        loginMessage.style.color = 'red'
        
    }

});