const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

const videos = [
    "Q9yn1DpZkHQ",
    "GHpJ0STOfWc",
    "fSZvkr21dqk",
    "jtLbX3qGH9s",
    "m2Pa9j88fT0",
    "XCuubIKo7Ag"
]

app.get('/api/videos', (req, res) => {
    res.send(videos)
})

/* if (process.env.NODE_ENV != 'development') { */
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        console.log(path.join(__dirname, 'client/build/index.html'))

        res.sendFile(path.join(__dirname, 'client/build/index.html', (error) => {
            if (error) {
                res.status(500).send()
            }
        }))
    })
/* } */

app.listen(3000, () => {
    console.log("running")
})