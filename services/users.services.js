const users = [
  {
    id: 1,
    first_name: 'Jose Carlos',
    last_name: 'Delgado',
    username: 'jack',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA0LCJlbWFpbCI6ImFjb3VudEBmdWxsc3RhY2suY29tIiwicm9sZSI6Im5vcm1hbCIsImlhdCI6MTY3NDA2NjI0MX0.Fr_5gFRgyXoDvouoWg5UJYsqq1fcKq6W7w6LycJw1I0',
    displayName: 'joseD87',
    emails: [{ value: 'acount@fullstack.com' }],
  },
  {
    id: 2, 
    first_name: 'Carlos David',
    last_name: 'Falcones',
    username: 'cd_falcon',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODEzLCJlbWFpbCI6ImFkbWluQGZ1bGxzdGFjay5jb20iLCJyb2xlIjoibm9ybWFsIiwiaWF0IjoxNjc0MDc3MDc3fQ.Qnqbal-YaWpt0pgZVsqy8e_k1gLCWUEUOynCpwkmlmY',
    displayName: 'Jill',
    emails: [{ value: 'admin@fullstack.com' }],
  },
]

const findUserByToken = (token, cb) => {
  process.nextTick( () => {
    for (let i=0, len=users.length; i < len; i++) {
      let user = users[i]
      if (user.token === token) {
        return cb(null, user)
      }
    }
    return cb(null, null)
  })
}

const findUserById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        id,
        first_name: 'Jose Carlos',
        last_name: 'Delgado',
        email: 'josedelgado1987@gmail.com',
      })
    }, 500)
  })
}

const findMyUser = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(user=>user.id==id)
      return resolve(user)
    }, 500)
  })
}

module.exports = {
  findUserById,
  findMyUser,
  findUserByToken
}


