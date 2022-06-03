const router = require('express').Router()
const Instrument = require('../models/instruments')

router.get('/', async (req, res) => {
    try {
        let instruments = await Instrument.find()
    
        res.send(instruments)    
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

router.post('/', async (req, res) => {
    try {
        const instrument = await new Instrument({
            ...req.body
        }).save()
    
        res.send(instrument)  
    } catch (error) {
        res.status(500).json({ "message": String(error) })
    }
})

module.exports = router