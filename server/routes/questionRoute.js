const express= require('express');
const {togglePinQuestion, updateQuestion, addQuestion} = require('../controllers/questionController');
const {protect}= require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add',protect, addQuestion);
router.post('/:id/pin', protect ,togglePinQuestion);
router.post('/:id/note', protect,updateQuestion);

module.exports=router;