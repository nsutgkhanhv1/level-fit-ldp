/**
 * Level Fit Landing Page - JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email-input');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = emailInput?.value?.trim();
      
      if (email && isValidEmail(email)) {
        // Handle email submission
        console.log('Email submitted:', email);
        
        // Show success message
        showNotification('Thank you! We will notify you when Level Fit launches.', 'success');
        
        // Clear the input
        emailInput.value = '';
      } else {
        showNotification('Please enter a valid email address.', 'error');
      }
    });
  }
});

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Show notification message
 * @param {string} message - Message to display
 * @param {string} type - 'success' or 'error'
 */
function showNotification(message, type = 'success') {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Style the notification
  Object.assign(notification.style, {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontFamily: 'var(--font-primary)',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#ffffff',
    backgroundColor: type === 'success' ? '#22c55e' : '#ef4444',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: '1000',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  });

  document.body.appendChild(notification);

  // Fade in
  requestAnimationFrame(() => {
    notification.style.opacity = '1';
  });

  // Auto-remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
