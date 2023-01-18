const router = require('express').Router()
const postLogin = require('../services/auth.services')

router.post('/login', postLogin)

module.exports = router
