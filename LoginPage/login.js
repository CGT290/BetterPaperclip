document.addEventListener('DOMContentLoaded', function(){
       
    const loginButton = document.getElementById('LoginButton');
    const userName = document.getElementById('username');
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordErrors');
    const userNameError = document.getElementById('userNameErrors');
    

        loginButton.addEventListener('click', function(a){
            userNameError.textContent = '';
            passwordError.textContent = '';

            let notEmpty = true;

            if(userName.value.trim() === ''){
                a.preventDefault();
                userNameError.textContent = 'Please Input your ID';
                notEmpty = false;

            }
            if(password.value.trim() === ''){
                a.preventDefault();
                passwordError.textContent = 'Please Input your Password';
                notEmpty = false;

            }
        })





});

document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput =() =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength)
    };
});