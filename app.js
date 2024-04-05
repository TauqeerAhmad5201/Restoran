const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})