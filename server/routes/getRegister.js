const express = require("express");
const router = express.Router();
const connectDb = require("../db.js");

/*const hashedPassword = await bcrypt.hash(password, saltRounds);
const isMatch = await bcrypt.compare("selim123", hashedPassword);
*/
router.post("/register", async (req, res) => {
  try {
    const db = await connectDb();
    const newUsers = db.collection("RegisterUsers");

    const { name, surname, email, password } = req.body;
    await newUsers.insertOne({ name, surname, email, password });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json("Error", err);
  }
});

module.exports = router;
