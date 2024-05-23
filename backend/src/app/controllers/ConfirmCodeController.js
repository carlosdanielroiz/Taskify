import * as Yup from "yup";
import bcrypt from "bcryptjs";

class ConfirmCodeController {
  async create(req, res) {
    const schema = Yup.object().shape({
      code: Yup.string().required(),
      hash: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema" });
    }

    const { code, hash } = req.body;

    if (await bcrypt.compare(code, hash)) {
      return res.status(200).json({ message: "Ok" });
    }

    return res.status(401).json({ error: "Code wrong" });
  }
}

export default new ConfirmCodeController();
