const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => {
    console.log("Mongo db connected");
}).catch( () => {
    console.log("Error connect mongo db");
})

const port = process.env.PORT || 8080;

app.use(cors);
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})

