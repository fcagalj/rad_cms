require('dotenv').config();
const keystone = require('keystone');

console.log('');
keystone.init({
  'name': 'Rad CMS',
  // Paths to our application static files
  'static': [
    './server/public/js/',
    './server/public/img/'],
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': 'mongodb://localhost/radcms',
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'User',
  // The encryption key to use for your cookies.
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

// Load project's Models
keystone.import('./server/models');

keystone.set('routes', require('./server/routes'));

keystone.start();
