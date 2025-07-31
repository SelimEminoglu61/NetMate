const express = require("express");
const router = express.Router();
const connectDb = require("../db.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

/*const hashedPassword = await bcrypt.hash(password, saltRounds);
const isMatch = await bcrypt.compare("selim123", hashedPassword);
*/
router.post("/getRegister", async (req, res) => {
  try {
    const db = await connectDb();
    const newUsers = db.collection("RegisterUsers");
    const { name, surname, email } = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    await newUsers.insertOne({ name, surname, email, hashedPassword });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json("Error", err);
  }
});

module.exports = router;
