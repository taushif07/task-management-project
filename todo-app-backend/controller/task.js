const model = require("../model/task")
const mongoose = require('mongoose');
const Todo = model.Todo;

exports.createTodo = async(req, res) => {
    const todo = new Todo(req.body);
    // todo.save((err,doc)=>{
    //   console.log({err,doc})
    //   if(err){
    //     res.status(400).json(err);
    //   } else{
    //     res.status(201).json(doc);
    //   }
    // })
    await todo.save().then((doc) => {
      res.status(201).json(doc);
   }).catch((err) => {
      res.status(400).json(err);
   });
    
  };
  
  exports.getAllTodos = async(req, res) => {
    const todos = await Todo.find();
    res.json(todos);
  };
  
  exports.getTodo = async(req, res) => {
    const id = req.params.id;
    console.log({id})
    const todo = await Todo.findById(id);
    res.json(todo);
  };
//   exports.replaceProduct = async(req, res) => {
//     const id = req.params.id;
//     try{
//     const doc = await Todo.findOneAndReplace({_id:id},req.body,{new:true})
//     res.status(201).json(doc);
//     }
//     catch(err){
//       console.log(err);
//       res.status(400).json(err);
//     }
//   };
  exports.updateTodo = async(req, res) => {
    const id = req.params.id;
    try{
    const doc = await Todo.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
  };
  exports.deleteTodo = async(req, res) => {
    const id = req.params.id;
    try{
    const doc = await Todo.findOneAndDelete({_id:id})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
  };
  