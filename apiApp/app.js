
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contacts', (req, res) => {
  res.send('Contacts')
})

app.get("/error", function (req, res){
  res.status(404).send("NotFound");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports.app = app;