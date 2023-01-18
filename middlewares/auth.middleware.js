// const JwtStrategy = require('passport-jwt').Strategy
// const {ExtractJwt} = require('passport-jwt')
const BearerStrategy = require('passport-http-bearer').Strategy
const passport = require('passport')

// require('dotenv').config()
// const jwtSecret = process.env.JWTSECRET

const { findUserByToken } = require('../controllers/users.controllers')

// const options = {
//   jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
//   secretOrKey : jwtSecret
// }

passport.use('bearer', new BearerStrategy(
  (token, done) => {
    findUserByToken(token, (err, user) => {
      if (err) { return done(err) }
      if (!user) { return done(null, false) }
      return done(null, user, { scope: 'all' })
    })
  }
))

console.log(passport)

// passport.use(
//   new JwtStrategy(options, (tokenDecoded, done) => {
//     findUserById(tokenDecoded.id)
//       .then((user) => {
//         if(user){
//           done(null, tokenDecoded)
//         }else{
//           done(null, false)
//         }
//       })
//       .catch((error) => {
//         done(error, false)
//       })
//   })
// )

module.exports = passport