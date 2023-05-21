const path = require('path');

const rootDir = require('../util/path');

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'))
}

exports.postContactUS = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'form-success.html'))
}