import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";
import config from "../../config/database";

const sequelize = new Sequelize(config);

class User extends Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    tel: Sequelize.STRING,
    picture: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.VIRTUAL,
    password_hash: Sequelize.STRING,
    token: Sequelize.STRING,
    linkedin: Sequelize.STRING,
    instagram: Sequelize.STRING,
  },
  {
    sequelize,
  }
);

User.addHook("beforeSave", async (user) => {
  if (user.password) {
    user.password_hash = await bcrypt.hash(user.password, 8);
  }
});

export default User;