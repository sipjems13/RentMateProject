/**
 * Login Page - Frontend JavaScript
 * Handles client-side interactions and UI enhancements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLoginPage();
});

/**
 * Initialize all login page functionality
 */
function initializeLoginPage() {
    setupPasswordToggle();
    setupFormValidation();
    setupErrorMessageAutoHide();
    setupInputFocusEffects();
    setupEnterKeySupport();
    console.log('🔐 Login page initialized');
}

/**
 * Password visibility toggle functionality
 */
function setupPasswordToggle() {
    const toggleIcon = document.querySelector('.toggle-icon');
    const passwordInput = document.getElementById('id_password');
    
    if (toggleIcon && passwordInput) {
        toggleIcon.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.textContent = '🙈';
            } else {
                passwordInput.type = 'password';
                toggleIcon.textContent = '👁️';
            }
        });
    }
}

/**
 * Form validation and submission handling
 */
function setupFormValidation() {
    const loginForm = document.getElementById('loginForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (loginForm && submitBtn) {
        loginForm.addEventListener('submit', function(e) {
            const username = document.getElementById('id_username').value.trim();
            const password = document.getElementById('id_password').value.trim();
            
            // Client-side validation
            if (!username || !password) {
                e.preventDefault();
                showValidationError('Please fill in all fields');
                return false;
            }
            
            // Minimum length validation
            if (username.length < 3) {
                e.preventDefault();
                showValidationError('Username must be at least 3 characters');
                return false;
            }
            
            if (password.length < 4) {
                e.preventDefault();
                showValidationError('Password must be at least 4 characters');
                return false;
            }
            
            // Show loading state
            showLoadingState(submitBtn);
        });
    }
}

/**
 * Show loading state on button
 */
function showLoadingState(button) {
    button.disabled = true;
    button.innerHTML = '<span class="loading"></span>Logging in...';
}

/**
 * Display validation error message
 */
function showValidationError(message) {
    // Remove existing validation error if any
    const existingError = document.querySelector('.validation-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Create new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message validation-error';
    errorDiv.textContent = message;
    
    // Insert before form
    const form = document.getElementById('loginForm');
    form.parentNode.insertBefore(errorDiv, form);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        errorDiv.style.transition = 'opacity 0.5s';
        errorDiv.style.opacity = '0';
        setTimeout(() => errorDiv.remove(), 500);
    }, 3000);
}

/**
 * Auto-hide server error messages
 */
function setupErrorMessageAutoHide() {
    const errorMessage = document.getElementById('errorMessage');
    
    if (errorMessage) {
        setTimeout(() => {
            errorMessage.style.transition = 'opacity 0.5s';
            errorMessage.style.opacity = '0';
            setTimeout(() => errorMessage.remove(), 500);
        }, 5000);
    }
}

/**
 * Add focus effects to input fields
 */
function setupInputFocusEffects() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

/**
 * Enter key support for form submission
 */
function setupEnterKeySupport() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('loginForm').dispatchEvent(new Event('submit', { cancelable: true }));
            }
        });
    });
}

/**
 * Clear form fields (utility function)
 */
function clearForm() {
    document.getElementById('id_username').value = '';
    document.getElementById('id_password').value = '';
}

/**
 * Focus on username field on page load
 */
window.addEventListener('load', function() {
    const usernameInput = document.getElementById('id_username');
    if (usernameInput) {
        usernameInput.focus();
    }
});
