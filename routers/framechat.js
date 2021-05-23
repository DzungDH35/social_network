const router = require('express').Router()

router.get('/:userId', (req, res) => {
    res.render('framechat')
})

module.exports = router
