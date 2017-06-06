let express = require('express'),
    todoRoute = express.Router(),
    Todo = require('../models/todo.schema').todo;

todoRoute
    .get('/todos', (req, res)=>{

        Todo.find((err, todos)=>{
            if(err) res.send(err);

            res.json(todos);
        })

    })

    .put('/todo/:id', (req, res)=>{

        Todo.findByIdAndUpdate(req.params.id, req.body, (err, todo)=>{

            if(err) res.send(err);

            res.sendStatus(200);
        })

    })

    .delete('/todo/:id', (req, res)=>{
        Todo.remove({

            _id: req.params.id

        }, (err, todo)=>{

            if(err) res.send(err);
            res.sendStatus(200);

        })
    })

    .post('/todos', (req, res)=>{

        Todo.create({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author

        }, (err, todo)=>{
            if(err) res.send(err);
            res.sendStatus(200);

        })

    });


module.exports = todoRoute;