// Function to check if the password and confirm password match
function validatePasswordMatch() {
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');
  const errorMessage = document.getElementById('password-error'); // Error message element

  // If password and confirm password do not match, add an error
  if (passwordField.value !== confirmPasswordField.value) {
    // Add error class for both inputs
    passwordField.classList.add('input-error');
    confirmPasswordField.classList.add('input-error');
    
    // Show the error message
    errorMessage.style.display = 'block';  // Show error message
  } else {
    // Remove error class if they match
    passwordField.classList.remove('input-error');
    confirmPasswordField.classList.remove('input-error');
    
    // Hide the error message if the passwords match
    errorMessage.style.display = 'none';  // Hide error message
  }
}

// Event listener for password fields to trigger validation on input
document.getElementById('password').addEventListener('input', validatePasswordMatch);
document.getElementById('confirmPassword').addEventListener('input', validatePasswordMatch);

// Function to toggle password visibility
function togglePassword() {
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');
  const passwordVisibility = document.getElementById('showPassword');
  
  if (passwordVisibility.checked) {
    passwordField.type = 'text';
    confirmPasswordField.type = 'text';
  } else {
    passwordField.type = 'password';
    confirmPasswordField.type = 'password';
  }
}
