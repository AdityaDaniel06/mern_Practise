const express = require('express');
const app = express();

const stuRoute = require('./routes/studentRoutes');
const teacherRoute = require('./routes/teacherRoutes');

app.get('/', (req, res) => {
  res.send(' Landing Page');
});

app.use('/student', stuRoute);
app.use('/teacher', teacherRoute);

app.listen(9000, () => {
  console.log('Server running');
});
