import * as Yup from "yup";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "../models/User";

const verifyAsync = promisify(jwt.verify);

class UserController {
  async index(req, res) {
    const page = req.query.page || 1
    const limit = req.query.limit || 20
    const order = ["id"]

    const users = await User.findAll({
      limit,
      offset: limit * page - limit,
      order,
      attributes: {
        exclude: ["password_hash"]
      },
    });

    return res.status(200).json(users);
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: {
        exclude: ["password_hash"]
      }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    return res.status(200).json(user);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      first_name: Yup.string().required(),
      last_name: Yup.string(),
      tel: Yup.string(),
      picture: Yup.string(),
      linkedin: Yup.string(),
      token: Yup.string(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema!"});
    }

    const { email } = req.body

    const findUser = await User.findOne({ where: { email }})

    if (findUser) {
      return res.status(401).json({ error: "This e-mail has been signed up already"})
    }

    const { first_name, last_name, tel, id, createdAt, updatedAt, linkedin, picture } = await User.create(req.body);

    return res.status(201).json({ 
      first_name, 
      last_name, 
      tel, 
      email, 
      id, 
      createdAt, 
      updatedAt, 
      linkedin, 
      picture 
    });
  }

  async update(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const schema = Yup.object().shape({
      tokenAccess: Yup.string().required(),
      first_name: Yup.string(),
      last_name: Yup.string(),
      picture: Yup.string(),
      linkedin: Yup.string(),
      token: Yup.string(),
      tel: Yup.string(),
      password: Yup.string().min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema!"});
    }

    const { tokenAccess, password } = req.body; 

    try {
      const decoded = await verifyAsync(tokenAccess, "cfdz2c8bbp2rw54vr1uzny3a9qbup8h3")
      req.userId = user.id

      if (decoded.id === user.id) {
        const updateFields = { ...req.body };

        if (password) {
          updateFields.password_hash = await bcrypt.hash(password, 8);
        }

        await User.update(updateFields, {
          where: {
            id,
          },
        });

        return res
          .status(200)
          .json({ message: `The user with id ${id} was been updated` });
      }
      console.error("Token is of other user")
      return res.status(401).json({ error: "Token is of other user" });
    } catch {
      return res.status(401).json({ error: "Token invalid" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    await User.destroy({ where: { id }})

    return res.status(200).json({ message: `The user with id ${id} was been deleted` });
  }
}

export default new UserController();