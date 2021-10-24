const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/alexapp'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/alexapp/index.html'));});
app.listen(process.env.PORT || 8080);
