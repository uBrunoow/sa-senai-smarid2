const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002, () => {
  console.log('Server running on port http://localhost:3002')
})

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'testeuser',
})

app.post('/register', (req, res) => {
  const sentEmail = req.body.email
  const sentUserName = req.body.userName
  const sentPassword = req.body.password
  const sentCpf = req.body.credential

  const SQL = 'INSERT INTO users (email, username, password, cpf) VALUES (?,?,?,?)'
  const Values = [ sentEmail, sentUserName, sentPassword, sentCpf ]

  db.query(SQL, Values, (err, results) => {
    if(err) {
      res.send(err)
    } else {
      console.log('User inserted successfully')
      res.send({message: 'User added'})
    }
  })
})

app.post('/login', (req, res) => {
  const sentLoginUserName = req.body.loginUserName
  const sentLoginPassword = req.body.loginPassword

  const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
  const Values = [ sentLoginUserName, sentLoginPassword ]

  db.query(SQL, Values, (err, results) => {
    if(err) {
      res.send({error: err})
    } 
    if (results.length > 0) {
      res.send(results)
    } else {
      res.send({message: 'Credentials dont match'})
    }
  })
})