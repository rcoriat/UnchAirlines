const Sequelize = require('sequelize');

const sequelize = new Sequelize('bvrvpxjyjoakyvj9hnsp', 'u2tvzgy6icajdymukrze', 'sGwsnyiHEyNfLPrYLvNJ', {
  host: 'bvrvpxjyjoakyvj9hnsp-mysql.services.clever-cloud.com',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  define: {
    timestamps: false
  }

});

module.exports = sequelize;