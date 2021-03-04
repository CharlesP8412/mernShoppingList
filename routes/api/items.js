const express = require('express');

const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route GET /api/items
// @desc get all items
// @access  Public

router.get('/', (req, res) => {
  console.log("HIT ROUTE!!!!!!!!!!")
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

module.exports = router;
