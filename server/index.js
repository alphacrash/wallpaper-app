const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
    session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/testdb');

// Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Start Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});