const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('group');
})

module.exports = router;