export default defineNitroPlugin(async (nitro) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        // await sequelize.sync({alter: true, force: true})
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})
