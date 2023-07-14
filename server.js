const express = require('express');
const mysql = require('mysql2');
const PORT = 3001;
const path = require('path');
const app = express();

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'the_legion'
  });


app.use(express.static('public'));


db.connect((err) => {
    if (err) throw err
    console.log('Connected to the database!');
  });
  
app.get('/', (req, res) => {
    const config = {
        user: 'root',
        password: '',
        server: '127.0.0.1',
        database: 'the_legion'
    };

    mysql.connect(config)
    res.send()
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});