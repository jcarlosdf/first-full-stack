const express = require('express')
const router = express.Router()

router.route('/publications')
  .get()
  .post()

router.route('/publications/:publication_id')
  .get()
  .delete()

router.get('/publications/:publication_id/vote')

module.exports = router