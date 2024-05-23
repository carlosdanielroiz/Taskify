import * as Yup from "yup";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "../models/User";

class LoginController {
  async create(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      token: Yup.string(),
      password: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema." });
    }
    
    const verifyAsync = promisify(jwt.verify);

    const { email, password, token } = req.body;

    const user = await User.findOne({
      where: { email },
    });


    if (user) {
      if (password && (await bcrypt.compare(password, user.password_hash))) {
        return res.status(200).json({
          ...user.dataValues,
          password_hash: undefined,
          tokenAccess: jwt.sign({ id: user.id }, "cfdz2c8bbp2rw54vr1uzny3a9qbup8h3", {
            expiresIn: "7d"
          })
        });
      }

      if (token) {
        try {
          const decoded = await verifyAsync(token, "cfdz2c8bbp2rw54vr1uzny3a9qbup8h3")
          req.userId = user.id
          if (decoded.id === user.id) {
            return res.status(200).json({
              ...user.dataValues,
              password_hash: undefined,
              tokenAccess: jwt.sign({ id: user.id }, "cfdz2c8bbp2rw54vr1uzny3a9qbup8h3", {
                expiresIn: "7d"
              })
            });
          }

          return res.status(401).json({ error: "Token is of other user" });

        } catch (error) {
          return res.status(401).json({ error: "Token invalid" });
        }
      }
      return res.status(401).json({ error: "Password is wrong" });
    }

    return res.status(404).json({ error: "This email is not sign up" })
  }
}

export default new LoginController();