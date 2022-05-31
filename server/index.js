import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// load route files
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

// init express
const app = express();

// add body parser middleware 
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// load .env file
dotenv.config();

// connect mongodb & run server 
const PORT = process.env.PORT || 5000;
const MONGO_DB_URI = process.env.MONGO_DB_URI || '';

mongoose
    .connect(MONGO_DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> app.listen(PORT,()=> console.log(`Server Listening on port: ${PORT}`)))
.catch(err => console.log(err));


// usage of routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)