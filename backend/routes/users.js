const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get('/', usersController.listAll);
router.post('/', usersController.create);
router.post('/login', usersController.login);
router.get('/logout', usersController.logout);
router.get('/:id', usersController.getById);


module.exports = router;