const usersController = require('../controllers/users.controller')
const router = require('express').Router()

router.route('/')
  .get(usersController.getUser)
  .post(usersController.addUser)

module.exports = router