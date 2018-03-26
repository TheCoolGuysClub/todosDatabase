//downloaded
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const hbs = require('hbs');
const path = require('path');

//local
const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/todo')

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// app.use((req, res, next) => {
//   req.body = {};
//   next();
// })

app.post('/todos', (req, res) => {
  console.log(req.body);
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

app.get('/todos/new', (req, res) => {
  res.render('./todos/new.hbs');
})

app.get('/todos/:id/edit', (req, res) => {
  
})


app.get('/todos/:id', (req, res) => {
  //5ab2bbd3151f600bc62b5bec
  const id = req.params.id;
  Todo.findById(id)
    .then(todo => {
      res.send({todo})
    }, e=> {
      res.status(404).send(e);
    })
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id)
    .then(todo => {
      res.send({todo})
    }, e => {
      res.status(404).send(e);
    })
})

app.patch('todos/:id', (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
    .then(todo => {
      if (!todo) {
        res.status(404).send()
      } else {
        res.send(todo);
      }

    }, e => {
      res.status(404).send(e);
    })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

// Chrome:
// /todos/123/Jeremy?school=paly
// Route:
// /todos/:id/:name
// rec.params.id; => '123'
// rec.params.name; => 'Jeremy'
// rec.query.school; => 'paly'
//
// -----------------------------
//
// Chrome:
// /todos?school=paly&num=5
// Route:
// /todos
// rec.query.school; => 'paly'
// rec.query.num; => '5'


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
