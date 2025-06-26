import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


dotenv.config();
const app = express();

// middleware
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {

    // To get the log method, 
    res.on('finish', () => {
        console.log(`${req.method} http://localhost:${process.env.PORT}${req.originalUrl} -> ${res.statusCode}`)
    });

    // To move to next
    next();
})

//Routes
app.use(userRoutes);


//Mongo Db connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Connected to MongoDb");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`)
    });
}).catch(err => {
    console.error('MongoDB connection failed:', err.message)
})
