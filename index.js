const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');

const {
  databases: { mongoURL },
} = require('./config');

const app = express();

mongoose.connect(mongoURL);

app.get('/', (req, res) => {
  res.send({
    hi: 'there',
  });
});

app.use('/auth', authRoutes);

app.listen(process.env.PORT || 5000);
