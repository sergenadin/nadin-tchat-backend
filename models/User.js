// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  // Autres champs comme la bio, l'image de profil, etc.
});

module.exports = mongoose.model('User', userSchema);
