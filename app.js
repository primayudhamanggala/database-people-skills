const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

const user = require('./routes/user')
const skill = require('./routes/skill')

app.use('/users', user)
app.use('/skills', skill)



app.listen(3000, () => {
  console.log('Server started');
})
