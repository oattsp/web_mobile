// server/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Server static assets
app.use(express.static(path.resolve(__dirname, 'build')));
app.use(cors())

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3035;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});