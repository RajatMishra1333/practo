// app.js
const express = require('express');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', doctorRoutes);

module.exports = app;
