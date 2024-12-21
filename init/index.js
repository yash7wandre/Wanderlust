const mongoose = require("mongoose");
const intitData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  intitData.data = intitData.data.map((obj) => ({
    ...obj,
    owner: "675484f971a8b5322ed9fed9",
  }));
  await Listing.insertMany(intitData.data);
  console.log("data was initialize");
};

initDB();
