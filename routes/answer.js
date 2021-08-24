const express = require('express');
const answersController = require('../controller/answer');

const router = express.Router();

router.get('/staff/:year/:part/:userid', answersController.getStaffQuestionByUserId);
router.get('/staff/:year/:part/:userid/:number', answersController.getStaffAnswerFromUserIdByNumber);
router.post('/staff/:year/:part/:userid/:number', answersController.postOrPutStaffAnswer);
// router.put('/staff/:year/:part/:userid/:number', answersController.putStaffAnswer);

router.get('/manager/:year/:part/:userid', answersController.getManagerQuestionByUserId);
router.get('/manager/:year/:part/:userid/:number', answersController.getManagerAnswerFromUserIdByNumber);
router.post('/manager/:year/:part/:userid/:number', answersController.postOrPutManagerAnswer);
// router.put('/manager/:year/:part/:userid/:number', answersController.putManagerAnswer);

module.exports = router;