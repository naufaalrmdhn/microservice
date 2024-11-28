const express = require('express');
const { getAllUsers, addUser } = require('../controllers/userController');

const router = express.Router();

// Rute untuk mendapatkan semua user
router.get('/users', getAllUsers);

// Rute untuk menambahkan user baru
router.post('/users', addUser);

module.exports = router;
