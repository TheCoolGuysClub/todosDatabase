const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/todos', (req, res) => {
  console.log(req.body.completed);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

//
// const todoSchema = mongoose.Schema({
//   //schema is an object
//   text: {
//     type: String,
//     required: true,
//     minLength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   },
//   name: {
//     first: String,
//     last: String
//   }
// })
//
// //basically making a new class
// const Todo = mongoose.model('Todo', todoSchema);
//
// const todo = new Todo({
//   text: 'my new todo',
// })
//
// todo.save().then(doc => {
//   console.log('success', doc);
// }).catch(e=>{
//   console.log(e);
// })
