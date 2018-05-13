const express = require('express');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.get('/', (req, res) => {
  res.send({
    hi: 'there',
  });
});

app.use('/auth', authRoutes);

app.listen(process.env.PORT || 5000);
