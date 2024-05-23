import * as Yup from "yup";
import User from "../models/User";

class RegisterController {
  async create(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema" });
    }

    const { email } = req.body;
    const findUser = await User.findOne({ where: { email } });

    if (findUser) {
      return res
        .status(401)
        .json({ error: "This e-mail has been signed up already" });
    }

    return res.status(200).json({ message: "Ok" });
  }
}

export default new RegisterController();
