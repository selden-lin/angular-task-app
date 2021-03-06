var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
mongoose.connect(`mongodb://linseld913:${encodeURIComponent('aA@@9826')}@ds263248.mlab.com:63248/angular-task-db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).catch((err) => {
    console.log(err)
});


const TaskSchema = new mongoose.Schema({
    'listName': String,
    'listType': String,
    'listItems': [{
        'name': String,
        'timeSpent': Number,
        'dueDate': Date
    }]
})
const TaskModel = new mongoose.model('task', TaskSchema)


// get all tasks for a task list of a certain type
router.get('/all/:type/:listName', (req, res) => {
    TaskModel.exists({
        listType: req.params.type,
        listName: req.params.listName
    }, (err, existResult) => {
        if(err) res.status(400).send(err);
        else if (!existResult) res.send('List does not exist');
        else {
            TaskModel.findOne({
                listType: req.params.type,
                listName: req.params.listName,
            },
            (err, result) => {
                if(err) res.status(400).send(err)
                else res.send(result.listItems);
                
            })
        }
    })
})

// delete a task
router.delete('/:type/:listName/:taskName', (req, res) => {
    TaskModel.exists({
        listType: req.params.type,
        listName: req.params.listName
    }, (err, existResult) => {
        if(err) res.status(400).send(err);
        else if (!existResult) res.send('List does not exist');
        else {
            TaskModel.updateOne({
                listType: req.params.type,
                listName: req.params.listName,
            }, 
            {
                $pull: {
                    "listItems": {
                        "name": req.params.taskName,
                    }
                }
            },
            (err, addResult) => {
                if(err) res.status(400).send(err)
                else res.send({})
            })
        }
    })
})

// create a task for a list
router.post('/:type/:listName', (req, res) => {
    TaskModel.exists({
        listType: req.params.type,
        listName: req.params.listName
    }, (err, existResult) => {
        if(err) res.status(400).send(err);
        else if (!existResult) res.send('List does not exist');
        else {
            TaskModel.exists({
                listType: req.params.type,
                listName: req.params.listName,
                'listItems.name': req.body.name
            }, (err, result) => {
                if(result) {
                    res.send({
                        "data": "exists"
                    })
                    return;
                }
                let zoneOffset = new Date().getTimezoneOffset()
                TaskModel.updateOne({
                    listType: req.params.type,
                    listName: req.params.listName,
                }, 
                {
                    $addToSet: {
                        "listItems": {
                            "name": req.body.name,
                            "timeSpent": 0,
                            "dueDate": new Date(new Date(req.body.dueDate).getTime() + zoneOffset * 60000)
                        }
                    }
                    
                },
                (err, addResult) => {
                    if(err) res.status(400).send(err)
                    else res.send({})
                })
            })
        }
    })
})

// update time spent of a task
router.put('/:type/:listName/:taskName', (req, res) => {
    TaskModel.exists({
        listType: req.params.type,
        listName: req.params.listName
    }, (err, existResult) => {
        if(err) res.status(400).send(err);
        else if (!existResult) res.send('List does not exist');
        else {
            TaskModel.updateOne({
                listType: req.params.type,
                listName: req.params.listName,
                'listItems.name': req.params.taskName
            }, 
            {
                $set: {
                    "listItems.$.timeSpent": req.body.timeSpent
                }
            },
            (err, addResult) => {
                if(err) res.status(400).send(err)
                else res.send({})
            })
        }
    })
})

module.exports = router;