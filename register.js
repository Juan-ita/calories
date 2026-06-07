const registerForm = document.getElementById('register-form')

registerForm.addEventListener('submit', function(event){
    event.preventDefault(); // This stops the page from refreshing.

    const userAccount = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        gender: document.getElementById('gender').value,
        age: document.getElementById('age').value,
        weight: document.getElementById('weight').value,
        activity: document.getElementById('activity-level').value,
        goal: document.getElementById('fitness-goal').value,
        height: document.getElementById('height').value,
        name: document.getElementById('name').value,
    };

    localStorage.setItem('userProfile', JSON.stringify(userAccount));

    alert('Account created successfully! Redirecting to login...');

    window.location.href = 'login.html'
})