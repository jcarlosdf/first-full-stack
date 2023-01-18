const jwt = require('jsonwebtoken')

const checkUsersCredentials = require('../controllers/auth.temp.controller')
const jwtSecret = process.env.JWTSECRET

const postLogin = (req, res) => {
  const { email, password } = req.body
  // console.log(email, password)
  if (email && password) {
    checkUsersCredentials(email, password)
      .then((data) => {
        if (data) {
          const token = jwt.sign(
            {
              id: data.id,
              email: data.email,
              role: data.role,
            },
            jwtSecret
          )

          res.status(200).json({
            message: 'Correct Credentials!',
            token,
          })
        } else {
          res.status(401).json({ message: 'Invalid Credentials' })
        }
      })
      .catch((err) => {
        res.status(400).json({ message: err.message })
      })
  } else {
    res.status(400).json({
      message: 'Missing Data',
      fields: {
        email: 'example@example.com',
        password: 'string',
      },
    })
  }
}

module.exports = postLogin
