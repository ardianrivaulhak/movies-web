const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routers/index');
const PORT = 4000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);

app.listen(PORT, function () {
  console.log('Server is running on port ' + PORT);
});

module.exports = app;
