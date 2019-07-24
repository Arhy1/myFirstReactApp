const express = require('express');
const router = express.Route();

router.get('/add', (req, res) => {
    res.send('Hello');
});

module.exports = router;


