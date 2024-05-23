import * as Yup from "yup";
import bcrypt from "bcryptjs";
import Mail from "../../lib/Mail";

class SendMailController {
  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Error on validate schema." });
    }

    const { name, email } = req.body;

    const codeConfirmation = Math.floor(Math.random() * 900000) + 100000;
    const codeHash = await bcrypt.hash(String(codeConfirmation), 8);

    Mail.send({
      to: email,
      subject: "Taskify | Código de confirmação",
      text: `Olá ${name}, o seu código de confirmação é ${codeConfirmation}`,
      html: `<center style="width: 100%; display: block; padding: 48px 0; background-color: #F8F6FA">
                <div style="width: 100%; max-width: 640px; display: block; background-color: #FFFFFF; border-radius: 2px; padding-bottom: 40px;">
                  <center style="width: 100%; height: 80px; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #383c4e;">
                    <img src="https://i.imgur.com/uN315T2.png" alt="Logo Taskify" style="width: 100%; height: 64px; object-fit: contain; margin-top: 8px" />
                  </center>

                  <h2 style="font-size: 18px; font-weight: 700; color: #000000; margin: 0; width: 90%; margin-top: 24px; text-align: left;">Verifique seu endereço de e-mail</h2>
                  <h3 style="font-size: 14px; font-weight: 300; color: #000000; margin: 0; width: 90%; margin-bottom: 40px; margin-top: 8px; text-align: left;">Olá ${name}, agradecemos que queira criar uma nova conta na Taskify. Queremos ter certeza de que é realmente você. Insira o seguinte código de verificação quando solicitado. Caso não queira criar uma conta, ignore esta mensagem.</h3>

                  <h3 style="font-size: 16px; font-weight: 500; color: #000000; margin: 0; width: 100%; text-align: center;">Código de verificação</h3>
                  <h1 style="font-size: 32px; font-weight: 700; color: #8358FF; margin: 0; width: 100%; text-align: center;">${codeConfirmation}</h3>
                  <h4 style="font-size: 12px; font-weight: 200; color: #000000; margin: 0; width: 100%; text-align: center;">(Este código é válido somente 1 vez)</h4>

                  <div style="width: 100%; height: 1px; background-color: #e0e1e4; margin: 24px 0;"></div>

                  <h2 style="font-size: 14px; font-weight: 300; color: #6a6c6f; width: 100%; text-align: center;">
                    A Taskify nunca enviará um e-mail solicitando que você divulgue ou verifique sua senha.
                  </h2>
                </div>
            </center>`,
    });

    return res.status(200).json({ code: codeHash });
  }
}

export default new SendMailController();