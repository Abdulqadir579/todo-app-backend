const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  text: {
    type: String,
  },
});

const Todo = mongoose.model("Todo", TodosSchema);

module.exports = Todo;
