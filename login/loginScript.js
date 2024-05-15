function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;

    // Reset error messages
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    // Validate email
    if (email.trim() === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid email address";
        isValid = false;
    }

    // Validate password
    if (password.trim() === "") {
        passwordError.innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters long";
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.innerHTML = "Password must contain at least one capital letter";
        isValid = false;
    }
    return isValid;
}

function isValidEmail(email) {
    // Regular expression for validating email addresses
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}