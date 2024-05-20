import React, { useState } from 'react'
import { Button, Content, Field, Form } from './style'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/eye-slash.svg';
import logo from "../../assets/images/logo.png"

function Register() {

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!password || !email || !name || !confirmPassword) {
      return
    }
  }

  return (
    <Content>
      <Form onSubmit={(event) => signIn(event)}>
        <img src={logo} alt="" />
        <h1>Seja bem-vindo(a)</h1>
        <span>Por favor insira seus dados para realizar se registrar no site</span>
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
          <label htmlFor="name">Nome</label>
          
          <div className="input-and-icon">
            <input type="text" id='name' name='name' placeholder='Nome' onChange={(event) => setName(event.target.value)} />
          </div>
        </Field>

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

        <Field style={{ marginTop: "12px"}}>
          <label htmlFor="confirm-password">Confirma senha</label>
          
          <div className="input-and-icon">
            <input type={ showConfirmPassword ? "text" : "password"} id='confirm-password' name='confirm-password' placeholder='Confirmar senha' onChange={(event) => setConfirmPassword(event.target.value)} />
            
            { showConfirmPassword ? <EyeSlashIcon onClick={() => setShowConfirmPassword(false)} /> : <EyeIcon onClick={() => setShowConfirmPassword(true)} />}
          </div>
        </Field>

        <Button style={{ marginTop: "24px"}} type='submit' >
          Registrar
        </Button>

        <span style={{ marginTop: "12px"}}>Já possui uma conta? <a href="/login">Login</a></span>
      </Form>
    </Content>
  )
}

export default Register