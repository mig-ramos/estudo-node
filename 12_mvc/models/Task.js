const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Task = db.define('Task', {
    description: {
      type: DataTypes.STRING, 
      required: true
    },
    title: {
        type: DataTypes.STRING, 
        required: true
      },
      done: {
        type: DataTypes.BOOLEAN, 
        required: true
      },
})

module.exports = Task

