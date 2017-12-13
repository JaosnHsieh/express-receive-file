var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({storage: storage});
var express = require('express');
var app = express();

app.post('/', upload.single('myfile'), function(req, res, next) {
    if (req.file) {
        res.send('You have uploaded the file');
    } else {
        res.send('No file');
    }
});

var port = 8080;

app.listen(port, () => {
    console.log(`express is listening to ${port}`);
});