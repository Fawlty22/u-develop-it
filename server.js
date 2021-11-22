const express = require('express');
const mysql = require('mysql2');


//Porting
const PORT = process.env.PORT || 3001;
//App Instance
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'election'
    },
    console.log('Connected to the election database.')
);

//Database query
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});










// Catchall
app.use((req, res) => {
    res.status(404).end();
  });


//Listener 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });