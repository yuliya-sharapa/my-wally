const express = require('express');
const router = express.Router();
const operationsController = require("../controllers/operationsController");
const auth = require('../middleware/auth');

router.get('/', auth, operationsController.listAll);
router.get('/:id', operationsController.getById);
router.patch('/:id', auth, operationsController.edit);
router.delete('/:id', auth, operationsController.remove);
router.post('/', auth, operationsController.create);

module.exports = router;