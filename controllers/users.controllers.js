const Users = require('../services/users.services')
// const userToken = require('../middlewares/')

const getMyuser = (req, res) => {
  const id = req.user.id
  Users.findMyUser(id)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(error=>{
      res.status(401).json({message:error})
    })
}

module.exports = {getMyuser}