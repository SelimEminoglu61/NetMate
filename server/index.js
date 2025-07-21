const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://SelimEminoglu:" +
      process.env.MONGO_URI +
      "@cluster0.8cks0sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  console.log("burada");
  res.send("Backend çalışıyor!");
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
