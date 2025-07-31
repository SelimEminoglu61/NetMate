const express = require("express");
const router = express.Router();
const connectDb = require("../db.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/getLogin", async (req, res) => {
  try {
    const db = await connectDb();
    const newUsers = db.collection("RegisterUsers");
    const { email } = req.body;
    /*const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
     */ const account = await newUsers.findOne({ email });

    if (account != null) {
      const isMatch = await bcrypt.compare(
        req.body.password,
        account.hashedPassword
      );

      if (isMatch == true) {
        res.status(200).json({ success: true });
      } else {
        res.json("İncorrect İnformations");
      }
    } else {
      res.json("Not Found Account");
    }
  } catch (err) {
    res.status(500).json("Error", err);
  }
});

module.exports = router;
