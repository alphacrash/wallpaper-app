const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

const router = express.Router();

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) return done(null, false, { message: 'User not found' });
            const isValid = await user.isValidPassword(password);
            if (!isValid) return done(null, false, { message: 'Invalid password' });
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).json({ message: 'User registered' });
    } catch (err) {
        res.status(400).json({ message: 'Error registering user', error: err });
    }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ message: 'Logged in successfully' });
});

router.post('/logout', (req, res) => {
    req.logout(() => {
        res.status(200).json({ message: 'Logged out successfully' });
    });
});

module.exports = router;
