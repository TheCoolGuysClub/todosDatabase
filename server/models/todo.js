const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  //schema is an object
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  name: {
    first: String,
    last: String
  }
})

//basically making a new class
const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo}
