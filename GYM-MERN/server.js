require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const messageRoutes = require('./routes/messages');
const arrivalRoutes = require('./routes/comeandleave');
const requestRoutes = require('./routes/requests');

//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//route middleware
app.use(postRoutes);
app.use(messageRoutes);
app.use(arrivalRoutes);
app.use(requestRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Udara:udara123@mernapp.ypcrk.mongodb.net/mernGYM?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});