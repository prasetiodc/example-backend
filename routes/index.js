const router = require('express').Router()
const controller = require('../controller/favorite');

router.post('/favorite', controller.create)
router.get('/favorite', controller.get)
router.delete('/favorite/:id', controller.delete)

router.use('/', (req, res) => {
  res.send("Welcome to My Favorite Books")
})

module.exports = router