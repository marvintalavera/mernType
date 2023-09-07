// DEPENDENCIES
require('dotenv').config()
const PORT = process.env.PORT
import express from 'express'
const app = express()
import cors from 'cors'
import { Sequelize } from 'sequelize'
import destinationsController from '../controllers/destinations_controller'
import continents from '../controllers/continent_controllers'

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI as string)

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Express Excusions'
    })
})

// CONTROLLERS


app.use('/destinations', destinationsController)


app.use('/continents', continents)

//404 Page
app.get('*', (req,res) => {
    res.send('404') // we can add page for this later
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
  

module.exports = app;