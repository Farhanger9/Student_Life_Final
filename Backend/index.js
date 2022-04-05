const express = require('express');
const path = require('path');
const journalsRoutes = require('./Routes/journalsRoutes');
const profileRoutes = require('./Routes/profileRoutes');
const assessmentRoutes = require('./Routes/assessmentRoutes')
const moodRoutes = require('./Routes/moodRoutes')
const cors = require('cors')
const mongoose = require("mongoose");
require('dotenv').config()
//API URL https://murmuring-garden-88441.herokuapp.com/

const app = express();


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/*const store = new MongoDBSession({
    uri: process.env.MONGO_URI,
    collection: "mySession"
});*/


/*
app.use(session({
    secret: "wellness-student",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, expires: 60000 },
    store:store
}));
*/

app.use(journalsRoutes);
app.use(profileRoutes);
app.use(assessmentRoutes);
app.use(moodRoutes);


// Add error-handling middleware to deal with anything else
// eslint-disable-next-line no-unused-vars
/*app.use((err, req, res, next) => {
    // We may already have an error response we can use, but if not, use a generic
    // 500 server error and message.
    const status = err.status || 500;
    const message = err.message || 'unable to process request';
  
  
    res.status(status).json({
      status: 'error',
      error: {
        message,
        code: status,
      },
    });
});*/

app.get("/", (req,res)=>{
    res.json({message: "API is listening"})
});

const port = process.env.PORT || 3000

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        app.listen(port, () => {
            console.log(`Server is up at port ${port}`);
        });
    }
);


