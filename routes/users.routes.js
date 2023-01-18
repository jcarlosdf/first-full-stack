const router = require('express').Router()
const passport = require('../middlewares/auth.middleware')
const userServices = require('../services/users.services')

router.get('/me', passport.authenticate('bearer', {session: false}), userServices.getMyuser)

module.exports = router