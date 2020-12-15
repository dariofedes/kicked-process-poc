require('dotenv').config()
const { env: { PORT } } = process
const express = require('express')
const bodyParser  = require('body-parser')
const {
    kickedProcess,
    registerUser,
} = require('./logic')

const app = express()
const jsonBodyParser = bodyParser.json()


app.post('/registerUser', jsonBodyParser, (req, res) => {
    try {
        kickedProcess(req)

        registerUser(req, res)
            .then(user => {
                res.status(200).json(user)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    } catch(error) {
        res.status(500).json(error)
    }
})

app.listen(PORT, () => console.log(`
    ✅ Server up and listenint on port ${PORT} 🚀

    http://localhost:${PORT}
`))