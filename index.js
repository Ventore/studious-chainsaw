const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/authRoutes');

const {
  databases: { mongoURL },
  cookie: { key },
} = require('./config');

const app = express();

mongoose.connect(mongoURL);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [key],
  })
);

app.get('/', (req, res) => {
  res.send({
    hi: 'there',
  });
});

app.use('/auth', authRoutes);

app.listen(process.env.PORT || 5000);
