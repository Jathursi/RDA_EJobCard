import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Disable logging to avoid clutter
    dialectOptions: {
      connectTimeout: 60000, // Timeout setting for slower connections
    },
  }
);


// Set max_allowed_packet after connection is established
sequelize.authenticate().then(async () => {
  try {
    await sequelize.query("SET GLOBAL max_allowed_packet=104857600"); // Set to 100 MB, adjust as needed
    console.log("Connection established and max_allowed_packet set.");
  } catch (error) {
    console.error("Error setting max_allowed_packet:", error);
  }
}).catch((error) => {
  console.error("Unable to connect to the database:", error);
});

export default sequelize;
