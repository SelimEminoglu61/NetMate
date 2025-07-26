const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const saltRounds = 10;
const app = express();
const PORT = process.env.PORT || 5000;
const registerRoute = require("./routes/getRegister");
/*
try {
  const decoded = jwt.verify(token, secretKey);
  console.log(decoded); // { id: '123', email: 'selim@example.com', iat: ..., exp: ... }
} catch (err) {
  console.error("Token geçersiz veya süresi dolmuş");
}

const token = jwt.sign(user, secretKey, { expiresIn: "1h" });*/

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/register", registerRoute);

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
