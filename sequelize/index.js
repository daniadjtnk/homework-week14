const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'mac',
    password: 'no-password',
    host: 'localhost',
    port: 5432,
    database: 'books',
});

module.exports = sequelize;