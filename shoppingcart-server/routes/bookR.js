const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getBooks);

router.get('/:booId', bookController.getBooksById);

router.post('/', bookController.save);

router.put('/:booId', bookController.update);

router.delete('/:booId', bookController.deleteById);

module.exports = router;