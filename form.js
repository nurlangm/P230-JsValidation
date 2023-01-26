const form = document.getElementById('form');
const username = document.getElementById('username');
const surname=document.getElementById('surname')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const button =document.getElementById('but')

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const surnameValue=surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    valid=true;
    
    
    if(usernameValue === '') {
        setError(username, 'Username is required');
        valid=false;
    } else {
        setSuccess(username);

    }
    
    if(surnameValue === '') {
        setError(surname, 'Surname is required');
        valid=false;
    } else if (surnameValue.length < 3 ) {
        setError(surname, 'Surname must be at least 3 character.')
    } else {
        setSuccess(surname);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is required');
        valid=false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        valid=false;
    } else {
        setSuccess(email);
    }
    
    
    if(passwordValue === '') {
        setError(password, 'Password is required');
        valid=false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
        valid=false;
    } else {
        setSuccess(password);
    }
    
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        valid=false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        valid=false;
    } else {
        setSuccess(password2);
    }
    console.log(valid);
    if(valid===true){
        window.location.href = "https://www.youtube.com/watch?v=2Bswdv-3Z10";
    }

};
