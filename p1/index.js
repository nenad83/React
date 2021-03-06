var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var fileUpload = require('express-fileupload');

var mongo = require('./db/mongo');

var auth = require('./handlers/auth');
var root = require('./handlers/root');
var users = require('./handlers/users');
var cv = require('./handlers/cvs');
var films = require('./handlers/films');
var upload = require('./handlers/upload');

mongo.Init();

var app = express();

app.use('/', express.static('www'));

app.use(cors());

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


app.use(fileUpload({
    limits: { 
        fileSize: 50 * 1024 * 1024 
    }
}));



// app.get('/', root);

app.post('/auth/login', auth.login);
app.get('/auth/logout', auth.logout); // logout(req, res);

app.get('/users', users.getAllUsers);
app.get('/users/name/:name', users.getUserByName);
app.get('/users/:id', users.getUserById);
app.post('/users', users.createUser);
app.delete('/users/:id', users.deleteById, cors());
app.put('/users/:id', users.updateById);

app.post('/cv', cv.createCV);
app.put('/cv/:id', cv.updateCVById);
app.delete('/cv/:id', cv.deleteCVById);
app.get('/cv', cv.getAllCVs);
app.get('/cv/:id', cv.getCVById);

app.post('/films', films.addFilm);
app.get('/films', films.getAllFilms);

app.post('/upload', upload.uploadFile);
app.post('/upload/avatar', upload.uploadAvatar);
app.post('/upload/doc', upload.uploadDocument);

// app.use(function (err, req, res, next) {
//     if (err.name === 'UnauthorizedError') {
//         res.status(401).send('Invalid token');
//     }
// });

app.listen(8000);

