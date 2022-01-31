const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:userid', userController.getUserById);
// router.get('/')
router.get('/position/:id', userController.getAllManagerPosition);
router.get('/department/:id', userController.getUserByDepartment);

router.get('/:year/:part/:choiceCount', userController.getUserStaffAnswerAllChoice);
router.get('/:year/:part/notcomplete/:choiceCount', userController.getUserStaffAnswerNotComplete);
// router.get('/:department', userController.getUserByDepartment);

module.exports = router;