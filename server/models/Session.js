const mongoose = require("mongoose");

// session” = a database record for a user’s practice session
const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    role: {
      type: String,
      required: true
    },
    experience: {
      type: Number,   // 👈 changed to Number
      required: true,
      default: 0
    },
    topicsToFocus: {
      type:[String],
      required: true
    },
    description: {
      type: String
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);
