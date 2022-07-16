const express = require('express')
const router = express.Router()

const TaskComtroller = require('../controllers/TaskController')

router.get('/add', TaskComtroller.createTask)
router.get('/', TaskComtroller.showTasks)

module.exports = router