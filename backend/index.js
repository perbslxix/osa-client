import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'osa'
})

app.get('/', (req, res) => {
    res.json("Hello backend")
})

app.get('/accreditation', (req, res) => {
    const q = "SELECT * FROM accreditation"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/accreditation', (req, res) => {
    const q = "INSERT INTO accreditaiton (`accre_id`,`org_id`,`act_id`,`appendices`) VALUES (?)"
    const value = [
        req.body.accre_id,
        req.body.desc,
        req.body.act_id,
        req.body.appendices
    ]

    db.query(q, [value], (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('/', (req, res) => {
    const q = "SELECT * FROM accreditation"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log('listening')
})