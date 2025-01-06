const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require("dotenv")

dotenv.config({ path: "./config.env"})


const connectDB = require('./config/db');
const StudentRoutes = require('./routes/studentRoutes');
// const mongoose = require('mongoose');

connectDB();
const app = express();
const port = 3000;


app.use(express.json())

app.use(cors());


app.use('/api', StudentRoutes); 
let student = [];

app.get('/student',(req,res) => {
    res.send('hello world!');
});



app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});


app.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);
})