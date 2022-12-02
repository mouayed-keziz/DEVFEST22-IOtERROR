import express from 'express'

const app = express()


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yooo!')
})

app.listen(process.env.PORT || 5000)