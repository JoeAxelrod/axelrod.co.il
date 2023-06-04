import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import db from './routes/auth';
import routes from './routes/index';  // import the routes


const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test');


app.use('/', routes);
app.use('/auth', authRoutes);




app.listen(3001, () => {
    console.log(`Server running at http://localhost:3001/`);
});
