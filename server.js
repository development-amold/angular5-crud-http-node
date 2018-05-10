const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('config');
    coinRoutes = require('./expressRoutes/coinRoutes');  

    

    var dbConfig = config.get('dbConfig');
    const db_conn_string = `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;

    mongoose.Promise = global.Promise;
    mongoose.connect(db_conn_string).then(
        client => {console.log("Connected to database: "+client.connections[0].name) },
        err => { console.log('Can not connect to the database: '+ err)}
    );

    //   scheme://username:password@host:port/database
    //  Production Heroku URL: mongodb://heroku_ff4kqnxp:5vppf5fkcfsri34i4scnjf26cr@ds157089.mlab.com:57089/heroku_ff4kqnxp'
    // Localhost URL: 'mongodb://localhost:27017/angular5-crud-http-node'
    // must specify the NODE_ENV variable on heroku config reveals 

    // OR---WE CAN WRITE IN THE FOLLOWING WAY USING FUNCTION PROTOTYPE  
    // mongoose.connect(config.DB,function(err, client){
    //     if (err)
    //     {
    //         console.log('Can not connect to the database'+ err);
    //     }
    //     else
    //     {
    //         console.log("Connected to database: "+client.db.s.databaseName);
    //     }
    // });

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());    
    

    // Create link routes to Angular build directory for serving angular app
    var distDir = __dirname + "/dist";
    app.use(express.static(distDir));    
    
    const port = process.env.PORT || 4000;
    const server = app.listen(port,function(){
    console.log('Listening on port ' + port);
    });

    app.get("/",function(req,res){
        // res.send("<h4>MY NODE HOMEPAGE</h4>");
        res.setHeader('Content-disposition', 'inline;');
        res.setHeader('Content-type', 'text/plain');
        res.sendFile(__dirname+"/README.md");
    });
    
    app.use('/coins', coinRoutes);

    app.get('/*', function(req,res) {
        res.sendFile(path.join(__dirname+'/dist/index.html'));
    });

    app.use(function(req, res, next) {
        var err = new Error('Route Not Found');
        err.status = 404;
        next(err);
    });