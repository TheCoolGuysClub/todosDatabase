const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// app.use((req, res, next) => {
//   req.body = {};
//   next();
// })

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  })
  todo.save().then(doc => {
    res.send(doc);
  }, e => {
    res.send(e);
  })
})

//reading all
app.get('/todos', (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({todos})
    }, e => {
      res.status(404).send(e);
    })
})

app.get('todos/:id', (req, res) => {
  //5ab2bbd3151f600bc62b5bec
  Todo.findById("5ab2bbd3151f600bc62b5bec");
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

Chrome:
/todos/123/Jeremy?school=paly
Route:
/todos/:id/:name
rec.params.id; => '123'
rec.params.name; => 'Jeremy'
rec.query.school; => 'paly'

-----------------------------

Chrome:
/todos?school=paly&num=5
Route:
/todos
rec.query.school; => 'paly'
rec.query.num; => '5'


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

//basically making a new class
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
