import React, { useState } from 'react'
import { Button, Content, Field, Form } from './style'

import logo from "../../assets/images/logo.png"

function ForgotPassword() {

  const [email, setEmail] = useState<string>("")

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email) {
      return
    }
  }

  return (
    <Content>
      <Form onSubmit={(event) => signIn(event)}>
        <img src={logo} alt="" />
        <h1>Recuperar conta</h1>
        <span>Por favor insira o e-mail da sua conta para começarmos o processo de recuperção</span>

        <Field  style={{ marginTop: "12px"}}>
          <label htmlFor="email">E-mail</label>
          
          <div className="input-and-icon">
            <input type="email" id='email' name='email' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
          </div>
        </Field>


        <Button style={{ marginTop: "24px"}} type='submit' >
          Enviar
        </Button>

        <span style={{ marginTop: "12px"}}>Já possui uma conta? <a href="/login">Login</a></span>
      </Form>
    </Content>
  )
}

export default ForgotPassword