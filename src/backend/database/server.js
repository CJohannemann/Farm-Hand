const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('contacts.db');
app.get('/contact', (req, res) => {
    db.get(`
        SELECT first_name, last_name, email, phone FROM contacts
        WHERE first_name = 'John' AND last_name = 'Doe'
    `, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});