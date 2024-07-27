const MongoDbUrl =
 "mongodb+srv://hammad:hammad770@cluster0.aeeiyou.mongodb.net/TodolistData?retryWrites=true&w=majority";
const express = require("express");
const { connectMongoDb } = require("./connection");
const cors = require("cors");
const PORT = 5000;
const app = express();

const todoRouter = require("./routes/todos");

connectMongoDb(MongoDbUrl)
 .then(() => console.log("MONGODB CONNECTED!"))
 .catch(() => console.log("MongoDb not connected please check"));

app.use(express.urlencoded({ extended: false }));
const corsOptions = {
 origin: "*",
 credentials: true, //access-control-allow-credentials:true
 optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/Todolist", todoRouter);

app.listen(PORT, () => console.log("Server Started"));
