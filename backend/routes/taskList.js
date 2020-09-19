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

const db = mongoose.connection;
const TaskModel = new mongoose.model('task')

// get all lists for list type
router.get('/all/:type', (req, res) => {
    TaskModel
        .find({'listType': req.params.type})
        .select('listName')
        .exec((err, result) => {
            if (err) res.status(400).send(err)
            else {
                let retArr = []
                result.forEach((row) => {
                    retArr.push(row.listName)
                })
                res.status(200).send(retArr)
            }
        })
})

// Get list types
router.get('/types', (req, res) => {
    res.send(['errands-leisure', 'work', 'school'])
})

// make a new task list
router.post('/:type', (req, res) => {
    TaskModel.exists({
        'listName': req.body.listName,
        'listType': req.params.type
    }, (err, result) => {
        console.log(result)
        if (result) {
            res.send({
                "data": "exists"
            })
            return;
        }
        TaskModel.create({
            'listName': req.body.listName,
            'listType': req.params.type,
            'listItems': []
        }, (err, result) => {
            if(err) {
                console.log(err)
                res.status(400).send(err)
            }
            else res.status(200).send({})
        })
    })
})

// delete a task list
router.delete('/:type/:listName', (req, res) => {
    TaskModel.deleteOne({
        'listType': req.params.type,
        'listName': req.params.listName
    }, (err, result) => {
        if (err) res.status(400).send(err)
        else res.status(200).send({})
    })
})

module.exports = router;
