const express = require('express');
const app = express();

const stuRoute = require('./routes/studentRoutes');
const teacherRoute = require('./routes/teacherRoutes');

app.get('/', (req, res) => {
  res.send(' <h1>Landing Page</h1>');
});

app.use('/students', stuRoute);
app.use('/teacher', teacherRoute);

app.listen(9000, () => {
  console.log('Server running');
});
