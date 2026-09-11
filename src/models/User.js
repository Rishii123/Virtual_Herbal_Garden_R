const mongoose = require("mongoose");

// Note: model name kept exactly as "LogInCollection" so the existing MongoDB
// collection (and all previously seeded/registered users) keep working as-is.
const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bookmarks: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plant" }],
    default: [],
  },
  notes: [
    {
      text: {
        type: String,
        required: true,
      },
    },
  ],
});

const LogInCollection = mongoose.model("LogInCollection", logInSchema);

module.exports = LogInCollection;
