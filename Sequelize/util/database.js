const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodedb', 'postgres', 'niraj@123', {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = sequelize;
