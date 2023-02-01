const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

// Connect Database
connectDB();

//Init Middleware req body parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/products', require('./routes/api/products'));
app.use('/api/categories', require('./routes/api/categories'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port  ${PORT}`));
