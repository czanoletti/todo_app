//Requiring dependencies----------------------------------

let express = require('express'),
    bp = require('body-parser'),
    favicon = require('serve-favicon'),
    helmet = require('helmet'),
    cors = require('cors'),
    methodOverride = require('method-override'),
    morgan   = require('morgan'),


    //Initialize express App and required node modules
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000,

    //Routes
    routes = require('./routes/index');

let mongoose = require('mongoose'),
    dburl = 'mongodb://localhost/todoApp';

mongoose.connect(dburl);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Configuring the application------------------------------

app
    // .use(express.static(path.join(__dirname, 'public')))
    .use(bp.json())
    .use(bp.urlencoded({extended: true}))
    .use(bp.json({ type: 'application/vnd.api+json' }))
    .use(cors())
    .use(helmet())
    .use(morgan('dev'))
    .use(methodOverride())


    .use(favicon(path.join(__dirname, 'favicon', 'logo.ico')))

//Routes
    .use('/', express.static(path.join(__dirname, 'public')))
    .use('/api', routes.todo);

//Listening to port

app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});


