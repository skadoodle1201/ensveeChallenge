const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
        name:{
          type: String,
          required: true
        },
        username:{
          type: String,
          required: true,
          unique: true
        },
        email:{
          type: String,
          required: true
        },
        password: { 
          type: String, 
          required: true 
        },
        quote: { 
          type: String 
          }

});

module.exports = mongoose.model('User',UserSchema);