const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mong3 odb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
