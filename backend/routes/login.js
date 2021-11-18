const express = require("express");
const app = express();
const pool = require('../lib/db')
const bcrypt = require('bcrypt');

const router = express.Router();

app.use(express.json()); // req.body

router.get('/', function (req, res) {
  res.send('hello world')
})

router.post('/', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (users.rows.length === 0) return res.status(401).json({error: "email not found"});

    //PASSWORD CHECK
    const validPassword = await bcrypt.compare(password, users.rows[0].password);
    if (!validPassword) return res.status(401).json({error:"incorrect password"});
    return res.status(200).json("Success")

  } catch(error) {
    res.status(500).json({error: error.message});
  }
})


module.exports = router;