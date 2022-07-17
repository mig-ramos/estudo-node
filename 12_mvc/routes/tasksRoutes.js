const express = require('express')
const router = express.Router()

const TaskComtroller = require('../controllers/TaskController')

router.get('/add', TaskComtroller.createTask)
router.post('/add', TaskComtroller.createTaskSave)
router.post('/remove', TaskComtroller.removeTask)
router.get('/edit/:id', TaskComtroller.updateTask)
router.post('/edit', TaskComtroller.updateTaskSave)
router.post('/updatestatus', TaskComtroller.toggleTaskStatus)
router.get('/', TaskComtroller.showTasks)

module.exports = router