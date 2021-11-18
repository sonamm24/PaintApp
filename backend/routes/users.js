var express = require('express');
const pool = require('../lib/db');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET users listing. */

router.get('/', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json({users : users.rows});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.post('/', async (req, res) => {
  try {
    const firstName = req.body.first_name
    const lastName = req.body.last_name
    const email = req.body.email
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, lastName, email, hashedPassword]);
    res.json({users: newUser.rows[0]});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})

module.exports = router;
