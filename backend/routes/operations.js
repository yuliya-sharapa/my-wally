const express = require('express');
const router = express.Router();
const operationsController = require("../controllers/operationsController");

router.get('/', operationsController.listAll);
router.get('/:id', operationsController.getById);
router.post('/create', operationsController.create);

module.exports = router;