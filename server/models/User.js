const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  userId: {    
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select : false
  },
  cpf: {
    type: String,
    unique: true,
    require: true
  },
  profileImage: {
    type: String, // Tipo de dado é um ObjectId
    ref: "File" // Referência ao model "File" para relacionamento
  },  
});

userSchema.pre('save' , async function  (next) {
  this.password = await bcrypt.hash(this.password, 12)
  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;