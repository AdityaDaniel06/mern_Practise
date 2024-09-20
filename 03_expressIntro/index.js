const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to express');
});

app.listen(8000);
