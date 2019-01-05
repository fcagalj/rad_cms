const keystone = require('keystone');

keystone.init({
  'name': 'Rad CMS',
  // Paths to our application static files
  'static': [],
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

// Load your project's Models
keystone.import('./server/models');

// Add routes later

// Start Keystone
keystone.start();
