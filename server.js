const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/db'),
    coinRoutes = require('./expressRoutes/coinRoutes');    

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
        client => {console.log("Connected to database: "+client.connections[0].name) },
        err => { console.log('Can not connect to the database: '+ err)}
      );

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
    
    const port = process.env.PORT || 4000;
    const server = app.listen(port,function(){
    console.log('Listening on port ' + port);
    });

    // Create link to Angular build directory
    var distDir = __dirname + "/dist/";
    app.use(express.static(distDir));    

    app.get("/",function(req,res){
        res.send("<h4>MY NODE HOMEPAGE</h4>");
    });
    app.use('/coins', coinRoutes);

