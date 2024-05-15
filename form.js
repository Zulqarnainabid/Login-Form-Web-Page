let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let form = document.getElementById("button");

form.addEventListener('click', function (e) {
   
    let email = emailInput.ValueMax;
    let password = passwordInput.value;

    if (email.trim() !== '' && password.trim !== '') {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        emailInput.value = '';
        passwordInput.value = '';

        alert('Your data has been saved');
    } else {
        alert('Please fill in all fields');
    }
});