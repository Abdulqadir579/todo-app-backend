const Todo = require("../models/todoModel");

async function handleGetAllTodos(req, res) {
 console.log("loading....");
 const result = await Todo.find({});
 console.log(result);
 return res.status(200).json({ msg: "success get All todos", result: result });
}
async function handleGetTodoById(req, res) {
 const { id } = req.params;
 const result = await Todo.findById(id);
 return res
  .status(200)
  .json({ msg: "success get signle user", result: result });
}
async function handleAddTodo(req, res) {
 const { body } = req;
 const { text } = body;
 const todoData = {
  text: "todo item",
 };

 //  if (!text) {
 //   return res.status(401).json({ msg: "field are req...", result: "asd" });
 //  }

 const result = await Todo.create(todoData);
 await result.save();
 return res.status(201).json({ msg: "Todo Created!", result: result });
}
async function handleTodoUpdateById(req, res) {
 const { id } = req.params;
 const { body } = req.body;
 const result = await Todo.findByIdAndUpdate(id, { text: body.text });
 console.log(result);
 return res.status(200).json({ msg: "Todo Updated!", result: result });
}

async function handleTodoDeleteById(req, res) {
 const { id } = req.params;
 const result = await Todo.findByIdAndDelete(id);
 return res.json({ status: "Todo Deleted", result: result });
}

module.exports = {
 handleGetAllTodos,
 handleGetTodoById,
 handleTodoUpdateById,
 handleAddTodo,
 handleTodoDeleteById,
};
