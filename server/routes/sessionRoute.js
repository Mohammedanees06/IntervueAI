const express = require('express');
const {createSession, getMySession,getSessionById,deleteSession } = require('../controllers/sessionController');
const {protect} = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createSession);
router.get('/mysessions', protect, getMySession);
router.get('/:id', protect, getSessionById);
router.delete('/:id', protect, deleteSession);

module.exports = router;