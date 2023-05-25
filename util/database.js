const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'qwertyuiop', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;