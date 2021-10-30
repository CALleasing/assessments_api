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

router.get('/comment/user/:year/:part/department/:department', answersController.getAllStaffComment);
router.get('/comment/user/:year/:part/:manager_id/:userid', answersController.getStaffCommentByUserId);
router.post('/comment/user/:year/:part/:userid/:number', answersController.postOrPutStaffComment);

router.get('/comment/manager/:year/:part/:manager_id/:number', answersController.getStaffCOmmentWithManagerId);

module.exports = router;