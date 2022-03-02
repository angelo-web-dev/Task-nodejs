const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const tasksRouter = require('./routes/tasks');

const app = express();

app.set('port', 4000);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.set('views', __dirname + '/views');

app.engine('.hbs', engine({
    extname: '.hbs',
}));

app.set('view engine', '.hbs');

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs'
    }, 'single'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
    res.render('home');
});