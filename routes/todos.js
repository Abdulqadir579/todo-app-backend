const express = require("express");
const router = express.Router();

const {
 handleAddTodo,
 handleGetAllTodos,
 handleGetTodoById,
 handleTodoDeleteById,
 handleTodoUpdateById,
} = require("../controllers/todos");

router.post("/", handleAddTodo);
router.get("/", handleGetAllTodos);

router
 .route("/:id")
 .get(handleGetTodoById)
 .patch(handleTodoUpdateById)
 .delete(handleTodoDeleteById);

module.exports = router;
