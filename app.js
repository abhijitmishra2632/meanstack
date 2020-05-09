require('./config/config');
require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routerIndex = require('./routes/index.router');

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api',routerIndex);

app.listen(process.env.PORT , () => console.log('Server at port : '+ process.env.PORT));