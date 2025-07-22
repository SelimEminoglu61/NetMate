const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const saltRounds = 10;
const app = express();
const PORT = process.env.PORT || 5000;
/*
try {
  const decoded = jwt.verify(token, secretKey);
  console.log(decoded); // { id: '123', email: 'selim@example.com', iat: ..., exp: ... }
} catch (err) {
  console.error("Token geçersiz veya süresi dolmuş");
}

const token = jwt.sign(user, secretKey, { expiresIn: "1h" });*/

/*const hashedPassword = await bcrypt.hash(password, saltRounds);
const isMatch = await bcrypt.compare("selim123", hashedPassword);
*/
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://SelimEminoglu:" +
      process.env.MONGO_URI +
      "@cluster0.8cks0sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const loginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("LoginControl", loginSchema);
module.exports = mongoose.model("RegisterUser", registerSchema);

app.post("/getRegister", (req, res) => {
  const newUser = req.body;
});

app.get("/", (req, res) => {
  res.send("Backend çalışıyor!");
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
