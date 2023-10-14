import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  database: "blog",
  username: "postgres",
  password: "12345",
  host: "localhost",
  dialect: "postgres",
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default connect;
