const methodOverride = require('method-override')
const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController')

router.use(methodOverride('_method'))

router.get('/all', linkController.allLinks)

router.get('/:title', linkController.redirect)

router.get("/", (req, res) => {
    res.render('index', { err: false, body: {} })
})

router.post('/', express.urlencoded({ extended: true }), linkController.addLink)

router.delete('/:id', linkController.deleteLink)

router.delete('/', express.urlencoded({ extended: true }), linkController.deleteLink)

module.exports = router