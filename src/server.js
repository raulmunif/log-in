const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: 'localHost',
    user: 'root',
    password: '',
    database: 'crud'
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Login failed");
        return res.json(data)
    })
})


app.listen(8081, () => {
    console.log("Listening...");
});
