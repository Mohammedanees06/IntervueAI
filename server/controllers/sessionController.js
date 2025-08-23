const Session = require("../models/Session");
const Question = require("../models/Question");

//This session is used to organize a user’s practice questions and answers for a specific role or topic; you create it, 
// add questions to it, fetch or update its questions, and can delete the session when done.
exports.createSession = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, description, questions } =
      req.body;
    const userId = req.user._id;

    // Create session
    const session = await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
    });

    // Create related questions
    const questionDocs = await Promise.all(
  questions.map(async (q) => {
    const createdQuestion = await Question.create({
      session: session._id,
      question: q.question,    // optional field
      prompt: q.prompt,        // 👈 ADD THIS - required field
      answer: q.answer,        // required field
    });
    return createdQuestion._id;
  })
);

    // Link questions to session
    session.questions = questionDocs;
    await session.save();

    res.status(201).json({ success: true, session });
  } catch (error) {
    console.error("❌ Error creating session:", error); // 👈 log full error
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getMySession = async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user.id }) 
      .sort({ createdAt: -1 }) 
      .populate("questions");

    res.status(200).json({ success: true, sessions }); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
      .populate({
        path: "questions",
        options: { sort: { isPinned: -1, createdAt: -1 } }
      })
      .exec(); // ✅ now it's chained properly

    if (!session) {
      return res.status(404).json({ success: false, message: "Session not found" });
    }

    res.status(200).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


exports.deleteSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ success: false, message: "Session not found" });
    }

    if (session.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }

    await Question.deleteMany({ session: session._id });
    await session.deleteOne();

    res.status(200).json({ success: true, message: "Session deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

