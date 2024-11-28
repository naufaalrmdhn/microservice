const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('User-Service API is running!');
});

app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
