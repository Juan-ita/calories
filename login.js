const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

const typedEmail = document.getElementById('email').value;
const typedPassword = document.getElementById('password') .value;

//Fetch the saved account from localstorage
const savedData = localStorage.getItem('userProfile');

//check if acc exists
if (savedData === null){
    alert('No account found! Please register first.');
    return;
}

const registeredUser = JSON.parse(savedData);

//Compare what they typed with what was registered
if (typedEmail === registeredUser.email && typedPassword === registeredUser.password){
    alert('Login successful! Welcome back.');

window.location.href = 'index.html';    
} else {
    alert('Incorrect email or password. Please try again!');
}
});