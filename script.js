const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelector('.container');

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Event listener for form submission
signupForm.addEventListener('submit', function(event) {
    let isValid = true;

    // Validate email
    if (!emailInput.value.trim()) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    if (!passwordInput.value) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    } else {
        alert('Form submitted successfully!'); // In a real application, you'd send the data
    }
});

// Event listener for theme toggle button
themeToggle.addEventListener('click', function() {
    body.classList.toggle('theme-dark');
    container.classList.toggle('theme-dark');
    emailInput.classList.toggle('theme-dark');
    passwordInput.classList.toggle('theme-dark');

    // Update button text based on the theme
    if (body.classList.contains('theme-dark')) {
        themeToggle.textContent = 'Toggle Light Theme';
    } else {
        themeToggle.textContent = 'Toggle Dark Theme';
    }
});

// Initial theme check (you might want to save theme preference in local storage)
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('theme-dark');
    container.classList.add('theme-dark');
    emailInput.classList.add('theme-dark');
    passwordInput.classList.add('theme-dark');
    themeToggle.textContent = 'Toggle Light Theme';
}