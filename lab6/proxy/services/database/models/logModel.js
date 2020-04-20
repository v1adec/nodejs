module.exports = (sequelize, DataTypes) =>
    sequelize.define('LogRequests', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        url_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_agent: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'log_requests',
    });
