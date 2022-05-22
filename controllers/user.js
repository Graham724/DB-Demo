const router = require('express').Router()
const User = require('../models/user')

router.get('/', (req, res) => {
    res.send('USER')
})

router.post('/create', async (req, res) => {
    const { username, password, age, name } = req.body
    const createdUser = await new User ({
        username,
        password,
        age,
        name
    }).save()

    res.send(createdUser)
})

module.exports = router