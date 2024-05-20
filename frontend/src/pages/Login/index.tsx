import React, { useState } from 'react'
import { Button, Content, Field, Form, RememberAndForgot } from './style'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/eye-slash.svg';
import logo from "../../assets/images/logo.png"

function Login() {

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!password || !email) {
      return
    }
  }

  return (
    <Content>
      <Form onSubmit={(event) => signIn(event)}>
        <img src={logo} alt="" />
        <h1>Seja bem-vindo(a) de volta</h1>
        <span>Por favor insira seus detalhes para fazer login</span>
        <div className="social-media">
          <div className="op">
            <FaFacebook color='#29487d ' />
          </div>
          <div className="op">
            <FcGoogle />
          </div>
          <div className="op">
            <FaXTwitter color='black' />
          </div>
        </div>

        <div className="or">
          <div className="line" />
          <span>OU</span>
          <div className="line" />
        </div>

        <Field  style={{ marginTop: "12px"}}>
          <label htmlFor="email">E-mail</label>
          
          <div className="input-and-icon">
            <input type="email" id='email' name='email' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
          </div>
        </Field>

        <Field style={{ marginTop: "12px"}}>
          <label htmlFor="password">Senha</label>
          
          <div className="input-and-icon">
            <input type={ showPassword ? "text" : "password"} id='password' name='password' placeholder='Senha' onChange={(event) => setPassword(event.target.value)} />
            
            { showPassword ? <EyeSlashIcon onClick={() => setShowPassword(false)} /> : <EyeIcon onClick={() => setShowPassword(true)} />}
          </div>
        </Field>

        <RememberAndForgot>
          <div>
            <input type="checkbox" name="remeber" id="remeber" />
            <label htmlFor="remeber">Lembre-me</label>
          </div>

          <a href="">Esqueci minha senha</a>
        </RememberAndForgot>

        <Button style={{ marginTop: "24px"}} type='submit' >
          Entrar
        </Button>

        <span style={{ marginTop: "12px"}}>Não tem uma conta ainda? <a href="/registre">Registre-se</a></span>
      </Form>
    </Content>
  )
}

export default Login