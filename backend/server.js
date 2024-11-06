// server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./users.db');  // Connect to the users.db file

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Hashing challenge
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Hashed password comparison using SHA1
  const query = `
    SELECT * FROM users 
    WHERE username = '${username}' 
    AND password = '${password}'
  `;
  console.log('Executing query:', query);

  db.get(query, (err, row) => {
    if (err) {
      res.status(500).json({ error: `Internal server error: ${err.message}` });
      return;
    }
    if (row) {
      res.json({ message: 'Login successful! Here is your flag: c1phr3r_ch4s3{flag}' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});

// // Vulnerable Login Endpoint
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//
//   // Vulnerable SQL query
//   const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
// console.log('Executing query:', query);
//   db.get(query, (err, row) => {
//     if (err) {
//       console.error("Database error:", err.message);  // Log the detailed error message
//       res.status(500).json({ error: `Internal server error: ${err.message}` });
//       return;
//     }
//
//     if (row) {
//       res.json({
//         message: 'Login successful! Here is your flag: c1phr3r_ch4s3{flag}'
//       });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   });
// });
//
// Start the server
const port = process.env.PORT || 3001;  // Default to 3001 if PORT is not set
app.listen(port, () => {
  console.log('Server running on http://localhost:${port}');
});
