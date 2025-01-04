import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

app.use(cors())

mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'osa'
})

app.get('/', (req, res) => {
    res.json("Hello backend")
})

app.listen(8800, () => {
    console.log('listening')
})