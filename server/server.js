const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorMiddleware = require('./middlewares/error');

const app = express();

dotenv.config({ path: 'server/.env' });


// Connect to MongoDB 
connectDB();  


// Routes - Define your API routes here
const productRoutes = require('./routes/ProductRoutes');


// Middleware
app.use(bodyParser.json());
app.use(cors());


// Routes Middlewares
app.use('/api/products', productRoutes);


// middleware to handle error in APIs
app.use(errorMiddleware)


const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
