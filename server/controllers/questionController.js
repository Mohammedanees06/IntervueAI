const Question = require("../models/Question");
const Session = require("../models/Session");

exports.addQuestion = async (req, res) => {
  try {
    const { sessionId, questions } = req.body;

    if (
      !sessionId ||
      !questions ||
      !Array.isArray(questions) ||
      questions.length === 0
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing or invalid fields" });
    }

    for (const q of questions) {
      if (!q.question || !q.answer) {
        return res.status(400).json({
          success: false,
          message: "Each question must have question and answer",
        });
      }
    }

    const session = await Session.findById(sessionId);
    if (!session) {
      return res
        .status(404)
        .json({ success: false, message: "Session not found" });
    }

    const createdQuestions = await Question.insertMany(
      questions.map((q) => ({
        session: session._id,
        prompt: q.question, // rename to match schema
        answer: q.answer,
      }))
    );

    session.questions.push(...createdQuestions.map((q) => q._id));
    await session.save();

    res.status(201).json({ success: true, questions: createdQuestions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.togglePinQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.isPinned = !question.isPinned;
    await question.save();

    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ message: " Server Error" });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
  const {note}= req.body;
  const question = await Question.findById(req.params.id);

  if(!question){
    return res.status(404).json({message:"Question not found"});
  }

  question.note = note;
  await question.save();

  res.status(200).json({success:true, question});

  } catch (error) {
    res.status(500).json({ message: " Server Error" });
  }
};
