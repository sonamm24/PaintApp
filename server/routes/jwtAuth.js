const express = require("express");
const router = express.Router();
const pool = require("../db/db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorize = require("../middleware/authorize");

//Register


router.post("/register", validInfo, async (req, res) => {
  try {

    //1. destructure the req.body (first_name, last_name, email, password)

    const { first_name, last_name, email, password } = req.body;

    //2. check if user exists (if user exists, then throw error)

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists!")
    }

    //3. bcrypt the user password

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);


    //4. enter the new user inside our database

    const newUser = await pool.query("INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [first_name, last_name, email, bcryptPassword])


    //5. generating our jwt token

    const jwtToken = jwtGenerator(newUser.rows[0].user_id);

    return res.json({ jwtToken });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})



//LOGIN

router.post("/login", validInfo, async (req, res) => {

  try {

    // 1. destructure the req.body

    const { email, password } = req.body;

    // 2. check if the user doesnt exist (if not then we throw error)

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    if(user.rows.length === 0) {
      return res.status(401).json("Password or email is incorrect");
    }

    // 3. check if the incoming password is the same as the database password

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Password or email is incorrect");
    }

    // 4. give them the jwt token

    const jwtToken = jwtGenerator(user.rows[0].user_id);

    return res.json({ jwtToken });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

router.get("/verify", authorize, 
async (req, res) => {
  try {

    res.json(true)
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
})

module.exports = router;