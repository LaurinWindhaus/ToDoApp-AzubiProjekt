const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Beispielrouten

// Alle To-Dos abrufen
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    console.log(todos);
    res.setHeader('Content-Type', 'application/json');
    res.json(todos);
});

// Ein neues To-Do hinzufügen
router.post('/', async (req, res) => {
    const newTodo = new Todo({
        text: req.body.text,
        completed: false
    });

    const savedTodo = await newTodo.save();
    res.json(savedTodo);
});

module.exports = router;
