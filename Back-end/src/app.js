const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())


app.get("/", (req, res)=>{
    res.status(200).json({
        status: 200,
        message: 'Ok',
        routes: {
            users: '/'
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})