const express = require('express')
const router = express.Router()

router.get('/publications-types')

router.get('/publications-types/:publication_type_id')

module.exports = router