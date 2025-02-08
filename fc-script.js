function validateLogin() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let usernameError = document.getElementById('username-error');
    let passwordError = document.getElementById('password-error');
    
    let valid = true;
    
    if (username.value.trim() === '') {
        username.classList.add('invalid');
        usernameError.innerText = "Username is required";
        usernameError.style.display = "block";
        valid = false;
    } else {
        username.classList.remove('invalid');
        usernameError.style.display = "none";
    }
    
    if (password.value.trim() === '') {
        password.classList.add('invalid');
        passwordError.innerText = "Password is required";
        passwordError.style.display = "block";
        valid = false;
    } else {
        password.classList.remove('invalid');
        passwordError.style.display = "none";
    }
    
    if (valid) {
        alert("Login Successful!");
    }
}

function validateSignup() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    
    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');
    
    let valid = true;

    // Name validation: Only letters and spaces allowed
    let nameRegex = /^[A-Za-z\s]+$/;
    if (name.value.trim() === '') {
        name.classList.add('invalid');
        nameError.innerText = "Full Name is required";
        nameError.style.display = "block";
        valid = false;
    } else if (!nameRegex.test(name.value.trim())) {
        name.classList.add('invalid');
        nameError.innerText = "Full Name can only contain letters and spaces";
        nameError.style.display = "block";
        valid = false;
    } else {
        name.classList.remove('invalid');
        nameError.style.display = "none";
    }

    // Email validation: Required
    if (email.value.trim() === '') {
        email.classList.add('invalid');
        emailError.innerText = "Email is required";
        emailError.style.display = "block";
        valid = false;
    } else {
        email.classList.remove('invalid');
        emailError.style.display = "none";
    }

    // Password validation: Required
    if (password.value.trim() === '') {
        password.classList.add('invalid');
        passwordError.innerText = "Password is required";
        passwordError.style.display = "block";
        valid = false;
    } else {
        password.classList.remove('invalid');
        passwordError.style.display = "none";
    }

    if (valid) {
        alert("Signup Successful!");
    }
}

function validateResetPassword() {
    let email = document.getElementById('reset-email');
    let emailError = document.getElementById('reset-email-error');
    
    let valid = true;
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        email.classList.add('invalid');
        emailError.innerText = "Email is required";
        emailError.style.display = "block";
        valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        email.classList.add('invalid');
        emailError.innerText = "Enter a valid email address";
        emailError.style.display = "block";
        valid = false;
    } else {
        email.classList.remove('invalid');
        emailError.style.display = "none";
    }

    if (valid) {
        alert("Password reset link has been sent to your email!");
    }
}

function validateResetPassword() {
        let newPassword = document.getElementById('new-password');
        let confirmPassword = document.getElementById('confirm-password');
        let newPasswordError = document.getElementById('new-password-error');
        let confirmPasswordError = document.getElementById('confirm-password-error');
        
        let valid = true;
        
        if (newPassword.value.trim() === '') {
            newPassword.classList.add('invalid');
            newPasswordError.innerText = "New password is required";
            newPasswordError.style.display = "block";
            valid = false;
        } else {
            newPassword.classList.remove('invalid');
            newPasswordError.style.display = "none";
        }
        
        if (confirmPassword.value.trim() === '') {
            confirmPassword.classList.add('invalid');
            confirmPasswordError.innerText = "Please confirm your password";
            confirmPasswordError.style.display = "block";
            valid = false;
        } else if (confirmPassword.value !== newPassword.value) {
            confirmPassword.classList.add('invalid');
            confirmPasswordError.innerText = "Passwords do not match";
            confirmPasswordError.style.display = "block";
            valid = false;
        } else {
            confirmPassword.classList.remove('invalid');
            confirmPasswordError.style.display = "none";
        }
        
        if (valid) {
            alert("Password Reset Successful!");
            window.location.href = 'index.html';
        }
    }
