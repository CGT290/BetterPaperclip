document.addEventListener('DOMContentLoaded', function(){
       
    const loginButton = document.getElementById('LoginButton');
    const userName = document.getElementById('username');
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordErrors');
    const userNameError = document.getElementById('userNameErrors');
    

        loginButton.addEventListener('click', function(a){
            userNameError.textContent = '';
            passwordError.textContent = '';

            const notEmpty = true;

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
