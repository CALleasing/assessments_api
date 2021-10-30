const express = require('express');
const questionController = require('../controller/question');

const router = express.Router();

router.get('/staff/:year/:part', questionController.getStaffQuestion);
router.get('/staff/:year/:part/:number', questionController.getStaffQuestionByNumber);
router.post('/staff/:year/:part/:number', questionController.postOrPutStaffQuestion);

router.get('/manager/:year/:part', questionController.getManagerQuestion);
router.get('/manager/:year/:part/:number', questionController.getManagerQuestionByNumber);
router.post('/manager/:year/:part/:number', questionController.postOrPutManagerQuestion);

router.get('/comment/:year/:part', questionController.getStaffComment);
router.get('/comment/:year/:part/:number', questionController.getStaffCommentByNumber);
// router.post('/comment/:year/:part/:number', questionController.postOrPutStaffComment);

router.delete('/staff/:year/:part/:number', questionController.deleteStaffQuestionByNumber);
router.delete('/manager/:year/:part/:number', questionController.deleteManagerQuestionByNumber);
router.delete('/comment/:year/:part/:number', questionController.deleteStaffCommentByNumber);

module.exports = router;