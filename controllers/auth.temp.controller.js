const emails = [
  'admin@fullstack.com',
  'secretary@fullstack.com',
  'acount@fullstack.com',
]

const checkUsersCredentials = async (email, password) => {
  const wait = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (emails.includes(email) && password === 'string') {
        //   console.log('resolved')
          resolve({
            id: getRandom(100, 1000),
            email: email,
            role: 'normal',
          })
        }else{
        //   console.log('rejected')
          reject(null)
        }
      }, ms)
    })
  }
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  try{
  
    const user = await wait(getRandom(0, 5000))
    
    if(user){
      return user
    }
  
    return null

  } catch(error) {
    return error
  }

}

module.exports = checkUsersCredentials
