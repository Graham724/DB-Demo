const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

app.get('/test', (req, res) => {
    res.send('test')
})

const PORT = process.env.PORT || 5000

//db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

app.listen(PORT, () => console.log(`listening on port ${PORT}`))