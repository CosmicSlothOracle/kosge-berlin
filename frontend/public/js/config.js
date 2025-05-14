// API Configuration
const API_CONFIG = {
  BASE_URL: window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : 'https://kosge-backend.onrender.com/api',

  ENDPOINTS: {
    LOGIN: '/login',
    PARTICIPANTS: '/participants',
    BANNERS: '/banners'
  },

  // Helper method to get full endpoint URL
  getEndpointUrl: function(endpoint) {
    return `${this.BASE_URL}${this.ENDPOINTS[endpoint]}`;
  }
};

// Debug logging
function debugLog(...args) {
    if (API_CONFIG.DEBUG) {
        console.log('[KOSGE]', ...args);
    }
}

// Log configuration on load
debugLog('Configuration loaded:', API_CONFIG);

// Prevent accidental modification
Object.freeze(API_CONFIG);

// Export configuration
window.APP_CONFIG = API_CONFIG;