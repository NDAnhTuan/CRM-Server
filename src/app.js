const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//Config template engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// Router app.Method(PATH, HANDLER)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/views', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})