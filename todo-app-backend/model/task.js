const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: String,
    description: String,
    status: String,
    user: String,
    dueDate:String
  });
  
exports.Todo = mongoose.model('Todo', todoSchema);