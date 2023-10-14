import { DataTypes } from "sequelize";
import { sequelize } from "../config/connection.js";

const blogModel = () => {
  const blog = sequelize.define("blog", {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    heading: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  sequelize.sync();
  return blog;
};

export default blogModel;
