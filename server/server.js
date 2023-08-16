import express from 'express'
import mongoose from 'mongoose'
import Tweetrouter from '../server/routes/AllRoutes.js'
import 'dotenv/config'


const app = express()

app.use(express.json())


app.listen(process.env.PORT||'8000',()=>{
    console.log(`server listening ${process.env.PORT}`)
})




// mongoose.connect('')

app.use('/api/v1',Tweetrouter)