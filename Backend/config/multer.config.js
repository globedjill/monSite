const { app } = require('../app');

const multer = require('multer');
const upload = multer({
    dest: path.join(__dirname + '/upload')
});