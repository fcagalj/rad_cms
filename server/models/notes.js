const keystone = require('keystone');
const Types = keystone.Field.Types;
const path = require('path');

const Note = new keystone.List('Note', {
  autokey: {path: 'slug', from: 'title', unique: true},
  defaultSort: '-createdAt',
});

// Adding the option to add an image to Note from
const noteImgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    // required; path where the files should be stored
    path: keystone.expandPath('server/public/img'),
    generateFilename: function (file, index) {
      return file.originalname;
    },
    whenExists: 'error',
    // path where files will be served
    publicPath: '/public/img',
  },
});

// Finally we are gonna add the fields for our Note
Note.add({
  title: {
    type: String
  },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft'
  },
  author: {
    type: Types.Relationship,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  publishedAt: Date,
  image: {
    type: Types.File,
    storage: noteImgStorage,
    mimetype: '.jpeg, .jpg, .gif, .svg',
  },
  text: {
    type: Types.Html,
    wysiwyg: true,
    height: 150
  }
});

// Setting the default order of the columns on the admin tab
Note.defaultColumns = 'title, state|20%, author, publishedAt|15%';
Note.register();
