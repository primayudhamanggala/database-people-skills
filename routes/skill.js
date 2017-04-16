const express = require('express');
const router = express.Router()
const skillController = require('../controllers/skill')

router.post('/', skillController.create)

router.get('/', skillController.getAll)

router.put('/:id', skillController.update)

router.delete('/:id', skillController.delete)

module.exports = router;
