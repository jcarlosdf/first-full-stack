const records = [
  {
    id: 1,
    username: 'jack',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA0LCJlbWFpbCI6ImFjb3VudEBmdWxsc3RhY2suY29tIiwicm9sZSI6Im5vcm1hbCIsImlhdCI6MTY3NDA2NjI0MX0.Fr_5gFRgyXoDvouoWg5UJYsqq1fcKq6W7w6LycJw1I0',
    displayName: 'Jack',
    emails: [{ value: 'acount@fullstack.com' }],
  },
  {
    id: 2,
    username: 'jill',
    token: 'abcdefghi',
    displayName: 'Jill',
    emails: [{ value: 'jill@example.com' }],
  },
]

const findUserByToken = (token, cb) => {
  process.nextTick( () => {
    for (let i=0, len=records.length; i < len; i++) {
      let record = records[i]
      if (record.token === token) {
        return cb(null, record)
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
      return resolve({
        id,
        first_name: 'Jose Carlos',
        last_name: 'Delgado',
        email: 'josedelgado1987@gmail.com',
      })
    }, 500)
  })
}

module.exports = {
  findUserById,
  findMyUser,
  findUserByToken
}
