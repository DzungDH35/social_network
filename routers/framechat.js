const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('framechat')
})

module.exports = router