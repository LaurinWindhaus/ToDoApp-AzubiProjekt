const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos');
const mongoose = require('mongoose');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Datenbankverbindung herstellen
mongoose.connect('mongodb://ppdedocker1.ppdom01.poeppelmann.com:27018/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Routen
app.use('/api/todos', todosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));