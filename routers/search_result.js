const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('search_result');
});

module.exports = router;