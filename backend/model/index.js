const { Sequelize } = require('sequelize')
const { database, host, port, user, password } = require('../config/db').connection

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'mysql',
  define: {
    underscored: false,
    freezeTableName: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: true
  },
});

// sequelize.authenticate().then(() => {
//   console.log('链接成功')
//   sequelize.close()
// })

module.exports = sequelize