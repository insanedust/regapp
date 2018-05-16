const express = require('express');
const mongoose = require('mongoose');
const bodyPaser = require('body-parser');
const Asset = require('./Models/assetModel');

const port = process.env.PORT || 3433;

mongoose.connect('mongodb://localhost/assetAPI')
    .then(() => {
        console.log("Database connection successful")
    },
    (err) => {console.log(err)}
);

const app = express();
app.use(bodyPaser.urlencoded({extended:true}));
app.use(bodyPaser.json());

const assetRouter = require('./Routes/assetRoutes')(Asset);
app.use('/api/assets', assetRouter );

app.listen(port,(err) => {
    if(err) 
        console.log("Error unable to start server");
    else
    console.log("Server started: http://localhost:"+ port +"/api/assets/");
});