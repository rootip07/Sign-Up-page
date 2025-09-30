        // Select all the necessary elements
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput1 = document.querySelector('input[type="password"]:nth-of-type(1)');
const passwordInput2 = document.querySelector('input[type="password"]:nth-of-type(2)');
const checkbox = document.querySelector('input[type="checkbox"]');

// Add a 'submit' event listener to the form
form.addEventListener('submit', (e) => {
    // Prevent the default form submission
    e.preventDefault();     

    // Validate the input fields
    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput1.value.trim();
    const confirmPassword = passwordInput2.value.trim();

    // Check if any fields are empty
    if (email === '' || username === '' || password === '' || confirmPassword === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please re-enter.');
        return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Check if the checkbox is checked
    if (!checkbox.checked) {
        alert('Please agree to the terms by checking the box.');
        return;
    }

    // If all validations pass, you can submit the form data
    // For now, we'll just log the success message
    alert('Sign up successful! Now you can proceed to the next step.');

    // In a real application, you would send this data to a server
    // form.submit(); 
});