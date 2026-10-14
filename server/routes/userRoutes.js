const auth = require("../middleware/auth");
const connectDb = require("../db.js");
const { ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  try {
    const db = await connectDb();
    const newUsers = db.collection("Users");
    const userId = req.user.userId;

    if (typeof userId !== "string" || !ObjectId.isValid(userId)) {
      return res.status(401).json({ message: "Invalid user ID" });
    }

    const user = await newUsers.findOne(
      { _id: new ObjectId(req.user.userId) },
      { projection: { hashedPassword: 0 } },
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
