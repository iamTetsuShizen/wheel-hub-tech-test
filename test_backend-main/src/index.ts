const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 8080;

const db =  new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT)');
});

// Home Page
app.get( "/", ( req: any, res: any ) => {
    res.send( "Hello world!" );
} );

// API
app.post('/api/users', ( req: any, res: any ) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ 
            message: 'Username and password are required.'
        });
    }

    db.get('SELECT * FROM users WHERE username = ?', [username], (err: any, row: any) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (row) {
            return res.status(400).json({ message: 'Username already exists. Please choose a different one.' });
        }

        db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function(err: any) {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            res.status(201).json({
                status: 200,
                message: "El usuario se creó correctamente"
            });
        });
    });


});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );