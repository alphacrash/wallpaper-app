const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
});
const Item = mongoose.model('Item', ItemSchema);

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ message: 'Unauthorized' });
}

router.post('/items', isAuthenticated, async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/items', isAuthenticated, async (req, res) => {
    const items = await Item.find();
    res.status(200).json(items);
});

router.get('/items/:id', isAuthenticated, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/items/:id', isAuthenticated, async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/items/:id', isAuthenticated, async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
