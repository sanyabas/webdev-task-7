'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        login: DataTypes.STRING
    },
    { timestamps: true });
};
