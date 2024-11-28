const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3001;

app.use(express.json());

// Rute untuk otentikasi
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
