const db = require('../models');

async function connectDataBase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connect successfully.');
        await db.sequelize.sync();
        console.log('Database synchronized');

    } catch (error) {
        console.error('Database connection falled:', error.massage);
        process.exit(1);
    }
}
module.exports = connectDataBase;