import express from 'express'
import dbCon from './utils/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import routers from './routes/routes.js'
dotenv.config()
const app = express()

// mongodb
dbCon()
app.use(express.json())
app.use(cors())
app.use('/api', routers)
app.listen(process.env.PORT, () => {
    console.log(`server is running`)
})