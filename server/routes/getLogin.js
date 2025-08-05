const express = require("express");
const router = express.Router();
const connectDb = require("../db.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

router.post("/getLogin", async (req, res) => {
  try {
    const db = await connectDb();
    const newUsers = db.collection("RegisterUsers");
    const { email } = req.body;
    const account = await newUsers.findOne({ email });

    if (account != null) {
      const isMatch = await bcrypt.compare(
        req.body.password,
        account.hashedPassword
      );

      if (isMatch == true) {
        const token = jwt.sign(
          { userId: account._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "2h" }
        );

        res.status(200).json({
          message: "Login Succesful",
          token,
          user: { id: account._id, email: account.email },
        });
      } else {
        res
          .status(401)
          .json({ success: false, message: "İncorrect İnformation" });
      }
    } else {
      res.status(404).json({ success: false, message: "Not Found Account" });
    }
  } catch (err) {
    res.status(500).json("Error", err);
  }
});

module.exports = router;
