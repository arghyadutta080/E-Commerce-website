const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./middlewares/db');

const app = express();

dotenv.config({ path: 'server/.env' });

// Routes - Define your API routes here
const productRoutes = require('./routes/ProductRoutes');


// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productRoutes);


// Connect to MongoDB 
connectDB();  


const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
