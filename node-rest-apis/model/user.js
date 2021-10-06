const { Sequelize } = require("sequelize");
const sequelize = require('../config/connection');
const { DataTypes } = Sequelize;

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
    }
);
module.exports = User;