const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const list = require('./routes/list');
const connectDB = require("./database/connect");
require('dotenv').config();


const start = async () => {
    try {
        await connectDB(process.env.CONNECTION_STRING)
        app.listen(port, console.log('server is on port ${port}'))
    } catch (error) {
        console.log(error)
    }
};

app.use(express.json());
app.use(cors()); 


app.use("/api/v1/list", list);

start();