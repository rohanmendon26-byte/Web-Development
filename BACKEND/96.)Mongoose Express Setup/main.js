//npm i mongoose --> a library to work with MongoDB easily

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "hey first todo", desc: "Description of this todo", isDone: false });
    todo.save();
    res.send('Hello World!')
})

app.get('/a', async(req, res) => {
    let todo=await Todo.findOne({})
    res.json({title:todo.title,desc:todo.desc})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
