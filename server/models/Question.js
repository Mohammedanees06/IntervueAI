const mongoose = require("mongoose");

//This schema defines a Question model with fields for session, question, prompt, answer, note, pin status, and auto-managed timestamps.
const questionSchema = new mongoose.Schema(
  {
    session: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
    },
    question: {
      type: String,
    },
    prompt: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // ✅ Correct placement
);

module.exports = mongoose.model("Question", questionSchema);
