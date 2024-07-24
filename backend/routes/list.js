const express = require("express");
const router = express.Router();
const {getAll, createItem, deleteItem, getItem} = require('../controllers/list');

router.route('/').get(getAll).post(createItem)
router.route('/:id').get(getItem).delete(deleteItem)

module.exports = router