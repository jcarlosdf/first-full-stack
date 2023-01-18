const router = require('express').Router()
const postLogin = require('../services/auth.services')
// const { route } = require('./users.routes')


router.post('/sign-up')

router.post('/login', postLogin)

module.exports = router
