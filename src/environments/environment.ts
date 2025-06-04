/**
 * Environment configuration for development
 */
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  tableau: {
    serverUrl: process.env['TABLEAU_SERVER_URL'] || 'http://localhost:8000',
    siteName: process.env['TABLEAU_SITE_NAME'] || 'Default',
    apiVersion: '3.19'
  }
}; 