const { MongoClient } = require("mongodb");

const mongoUri =
  "mongodb+srv://SelimEminoglu:" +
  process.env.MONGO_URI +
  "@cluster0.8cks0sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(mongoUri);

async function connectDb() {
  await client.connect();
  return client.db("NetMate");
}

module.exports = connectDb;
