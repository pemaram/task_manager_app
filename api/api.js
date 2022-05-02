const express = require('express')
const app = express()
const cors = require('cors')

const {mongoose} = require('./db/mongoose')


const bodyParser = require('body-parser')

// LOAD THE MODELS 

const {List, Task} = require('./db/models')


// LOAD MIDDLEWARE

app.use(cors())
app.use(bodyParser.json())



app.get('/lists',(req,res)=>{
    List.find({}).then((lists)=>{
        res.send(lists)
    })
})


app.post('/lists' ,(req,res)=>{
    let title = req.body.title

    let newList = new List({
        title
    })
    newList.save().then((listdoc)=>{
        res.send(listdoc)
    })
})


app.patch('/lists/:id' ,(req,res)=>{
    List.findOneAndUpdate({_id: req.params.id},{
        $set:req.body
    }).then(()=>{
        res.send({'message' : 'Update New List'})
    })
})

app.delete('/lists/:id',(req,res)=>{
    List.findOneAndRemove({_id:req.params.id}).then((removedListDoc)=>{
        res.send(removedListDoc)
    })
})





// TASKS 


app.get('/lists/:listId/tasks' ,(req,res)=>{
    Task.find({
        _listId : req.params.listId
    }).then((tasks)=>{
        res.send(tasks)
    })
})

// GET BY SPECIFIC ID
// app.get('/lists/:listId/tasks/:taskId' ,(req,res)=>{
//     Task.findOne({
//         _id : req.params.taskId,
//         _listId : req.params.listId
//     }).then((getTaskdoc)=>{
//             res.send(getTaskdoc)
//     })
// })


app.post('/lists/:listId/tasks' ,(req,res)=>{
    let newTask  = new Task ({
        title: req.body.title,
        _listId : req.params.listId
    })
    newTask.save().then((newTaskdoc)=>{
        res.send(newTaskdoc)
    })
})


app.patch('/lists/:listId/tasks/:taskId', (req,res)=>{
    Task.findOneAndUpdate(
        {
            _id: req.params.taskId, 
            _listId: req.params.listId
        },
        {
            $set : req.body
        }
        ).then(()=>{
        res.send({message : "Updated Successfully"})
    })
})


app.delete('/lists/:listId/tasks/:taskId' ,(req,res) =>{
    Task.findOneAndDelete({
        _id : req.params.taskId,
        _listId : req.params.listId
    }).then((removedTaskDoc)=>{
        res.send(removedTaskDoc)
    })
})

app.listen(3000,()=>{
    console.log("Listening on 3000 port")
})