/**
 * Environment configuration for production
 */
export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || 'https://api.example.com',
  tableau: {
    serverUrl: process.env['TABLEAU_SERVER_URL'],
    siteName: process.env['TABLEAU_SITE_NAME'],
    apiVersion: '3.19'
  }
}; 