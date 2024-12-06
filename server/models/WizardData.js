const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.sqlite');

const WizardData = sequelize.define('WizardData', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = WizardData;
