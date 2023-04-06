const router = require('express').Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.get('/insert', userController.addUser);


module.exports = router;