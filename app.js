const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

//ROUTES
//Login routes
const loginRouter = require('./routes/auth.routes')
//Users
const userRouter = require('./routes/users.routes')

//CORS SETTINGS
const whitelist = ['http://localhost:8000']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) ||  !origin) {
      callback(null, true)
    } else {
      callback(new Error('Denied By CORS'))
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  app.use(cors(corsOptions))
  /* Set security HTTP headers */
  /* For Error ERR_BLOCKED_BY_RESPONSE.NotSameOrigin 200 
       https://stackoverflow.com/questions/70752770/helmet-express-err-blocked-by-response-notsameorigin-200
  */
  app.use(helmet({crossOriginResourcePolicy: false}))
    
} else {
  app.use(cors(corsOptions))
}


//Accept Json & form-urlencoded
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


//Routes
app.use('/api/v1', loginRouter)
app.use('/api/v1', userRouter)

//Tell everyone the state of your api
app.get('/', ({res}) => {
  res.status(200).json({
    status: 200,
    message: 'Ok',
    routes: {
      users: '/',
    },
  })
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
