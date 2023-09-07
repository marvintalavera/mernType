// DEPENDENCIES
const continents = require('express').Router()
const db = require('../models')
const { Destination } = db


// FIND ALL DESTINATIONS ON SAME CONTINENT
continents.get('/:continent_name', async (req: { params: { continent_name: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any }; send: { (arg0: string): void; new(): any } } }) => {
    try {
        const listDestinations = await Destination.findAll({
            where: { continent_name: req.params.continent_name }
        })
        res.status(200).json(listDestinations)
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find destinations')
    }
})

// EXPORT
export default continents