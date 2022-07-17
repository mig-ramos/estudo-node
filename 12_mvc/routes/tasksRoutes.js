const express = require('express')
const router = express.Router()

const TaskComtroller = require('../controllers/TaskController')

router.get('/add', TaskComtroller.createTask)
router.post('/add', TaskComtroller.createTaskSave)
router.post('/remove', TaskComtroller.removeTask)
router.get('/', TaskComtroller.showTasks)

module.exports = router