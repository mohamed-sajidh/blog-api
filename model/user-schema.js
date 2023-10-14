import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

const userModel = () => {
  const user = sequelize.define("user", {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  sequelize.sync();
  return user;
};

export default userModel;
