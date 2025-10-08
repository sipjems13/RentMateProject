/**
 * Home Page - Frontend JavaScript
 * Handles dashboard interactions and UI enhancements
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeHomePage();
});

/**
 * Initialize all home page functionality
 */
function initializeHomePage() {
    animateStatistics();
    startClock();
    setupDynamicGreeting();
    setupLogoutConfirmation();
    setupKeyboardShortcuts();
    setupDashboardCards();
    logSessionInfo();
    console.log('🏠 Home page initialized');
}

/**
 * Animate statistics counters
 */
function animateStatistics() {
    animateValue('propertiesCount', 0, 12, 1000);
    animateValue('tenantsCount', 0, 34, 1500);
    animateValue('revenueCount', 0, 8500, 2000, '$');
}

/**
 * Animate a number from start to end
 */
function animateValue(id, start, end, duration, prefix = '', suffix = '') {
    const element = document.getElementById(id);
    if (!element) return;
    
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = prefix + current + suffix;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

/**
 * Start real-time clock
 */
function startClock() {
    updateTime();
    setInterval(updateTime, 1000);
}

/**
 * Update time display
 */
function updateTime() {
    const timeDisplay = document.getElementById('currentTime');
    if (!timeDisplay) return;
    
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    timeDisplay.textContent = now.toLocaleDateString('en-US', options);
}

/**
 * Setup dynamic greeting based on time of day
 */
function setupDynamicGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Welcome back';
    
    if (hour < 12) {
        greeting = 'Good morning';
    } else if (hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    
    const welcomeHeading = document.querySelector('.welcome-card h1');
    if (welcomeHeading) {
        const username = welcomeHeading.querySelector('#username');
        if (username) {
            const usernameText = username.textContent;
            welcomeHeading.innerHTML = `${greeting}, <span id="username">${usernameText}</span>! 👋`;
        }
    }
}

/**
 * Setup logout confirmation
 */
function setupLogoutConfirmation() {
    const logoutBtn = document.querySelector('.btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to logout?')) {
                e.preventDefault();
                return false;
            }
        });
    }
}

/**
 * Setup keyboard shortcuts
 */
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl + L to logout
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            const logoutBtn = document.querySelector('.btn-logout');
            if (logoutBtn && confirm('Are you sure you want to logout?')) {
                window.location.href = logoutBtn.href;
            }
        }
    });
}

/**
 * Setup dashboard card interactions
 */
function setupDashboardCards() {
    const cards = document.querySelectorAll('.dashboard-card');
    
    // Add staggered animation delay
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add click handler
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            showAlert(title);
        });
    });
}

/**
 * Show alert for dashboard sections
 */
function showAlert(section) {
    alert(`${section} section coming soon! 🚀`);
}

/**
 * Log session information to console
 */
function logSessionInfo() {
    const username = document.getElementById('username');
    if (username) {
        console.log('🏠 Welcome to RentMate Dashboard!');
        console.log('User:', username.textContent);
        console.log('Session started:', new Date().toLocaleString());
    }
}

/**
 * Get current greeting based on time
 */
function getCurrentGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}

/**
 * Format currency
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

/**
 * Refresh statistics (utility function for future use)
 */
function refreshStatistics() {
    console.log('Refreshing statistics...');
    animateStatistics();
}
