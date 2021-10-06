const { Sequelize } = require('sequelize');

const dbVars = {
    database: 'crud',
    username: 'root',
    password: 'root',
    dialect: 'mysql',
    host: 'localhost'
}

const sequelize = new Sequelize(dbVars.databaseName, dbVars.username, dbVars.password, {
    host: dbVars.host,
    dialect: dbVars.dialect
});

module.exports = sequelize;