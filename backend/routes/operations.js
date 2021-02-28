const express = require('express');
const router = express.Router();
const operationsController = require("../controllers/operationsController");
const auth = require('../middleware/auth');

router.get('/', auth, operationsController.listAll);
router.get('/:id', operationsController.getById);
router.post('/', auth, operationsController.create);

module.exports = router;