const { Model, Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./index')

const User = sequelize.define('t_user', {
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

// User.sync({ force: true });

module.exports = User