const mongoose = require("mongoose");

// Connects to MongoDB using the URI defined in the .env file.
// Kept separate from the models so DB connection logic never mixes with schema definitions.
function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("mongoose connected");
    })
    .catch((e) => {
      console.log("failed");
      console.error(e);
    });
}

module.exports = connectDB;
