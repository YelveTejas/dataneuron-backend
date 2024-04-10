import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.js'
import userRoute from './routes/route.js'
import Count from './Model/countModel.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())


app.use('/user',userRoute)
const port  = process.env.PORT || 6000
connectDb()
const server = app.listen(port,()=>{
    console.log('Port connected')
})



