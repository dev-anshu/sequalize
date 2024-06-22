const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // freezeTableName: true
        tableName: "Employees",
        timestamps: true,
        createdAt: false,
        updatedAt: 'updateTimestamp'
    });

    sequelize.sync({alter: true}); // alter: true, force: true
}