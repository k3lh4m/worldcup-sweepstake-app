const express = require('express');
const app = express();
const Party = require('./party');
const startUpDebugger = require('debug')('app:startup');
const bodyParser = require('body-parser');

app.use(express.json());
app.use('/api/', Party );

startUpDebugger('App has loaded');

app.listen(4020, () => {
  startUpDebugger('Listening to server 4020');
});

