const router = require('express').Router()
const passport = require('../middlewares/auth.middleware')
const userServices = require('../controllers/users.controllers')

router.get('/user-info', passport.authenticate('bearer', {session: false}), userServices.getMyuser)

router.get('/users')

router.route('/user/:user_id')
  .get()
  .put()

router.get('/user/:user_id/votes')

router.get('/user/:user_id/publications')



module.exports = router

