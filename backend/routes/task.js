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

router.get('/', function(req, res, next) {
    res.send("Hello")
    //res.render('index', { title: 'Express' });
});

// get all tasks for a task list of a certain type
router.get('/all/:type/:listName', (req, res) => {

})

// delete a task
router.delete('/:type/:listName/:taskName', (req, res) => {

})

// create a task for a list
router.post('/:type/:listName', (req, res) => {

})

// update a task
router.put('/:type/:listName/:taskName', (req, res) => {

})

module.exports = router;