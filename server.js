if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}


const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const usersRoutes = require('./routes/userRoutes')

app.use(express.urlencoded({extented: true}));
app.use(cors());
app.use(express.json())
/* database connection */
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/user-challenge';

const secret =process.env.SECRET ||'thisshouldbebetter';


mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",()=>{
    console.log("database connected");
});

const store = new MongoStore({
    mongoUrl: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60 //24 hours
});

store.on('error', e => {
    console.log('SESSION STORE ERROR', e);
});


/* <!----!> */

app.use('/api/',usersRoutes);


const port = process.env.PORT || 3001;

app.listen(port,()=>{
  console.log(`serving on ${port}`);
})