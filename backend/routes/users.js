const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get('/', usersController.listAll);
router.get('/:id', usersController.getById);
//router.post('/create', usersController.create);

module.exports = router;