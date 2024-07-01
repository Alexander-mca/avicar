const express = require('express'); // npm install express
const cors = require('cors'); // npm install cors
const morgan = require('morgan'); // npm install morgan

const routes_admin = require('./routes/admin.routes');


const app = express();

app.use(morgan('start'));

app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));

app.use(express.urlencoded({limit:'50mb', extended:true}));

app.use(express.json({limit:'50mb'}));

app.use('/admin', routes_admin);

module.exports = app;
