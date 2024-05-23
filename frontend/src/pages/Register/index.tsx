import React, { useContext, useState } from 'react'
import { Button, Content, Field, Form } from './style'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ReactComponent as EyeIcon } from '../../assets/icons/eye.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/eye-slash.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-left.svg';
import logo from "../../assets/images/logo.png"
import { useNavigate } from 'react-router-dom';
import { CodeConfirmation, confirmCode, createUser, register } from '../../services/api';
import { UserContext } from '../../context/UserContext';
import Loading from '../../components/Loading';

function Register() {

  const navigate = useNavigate()

  const { loadingLogin } = useContext(UserContext)

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [code, setCode] = useState<string>("")
  const [hash, setHash] = useState<string>("")

  const [info, setInfo] = useState<string>("⠀")
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingResendCode, setLoadingResendCode] = useState<boolean>(false)


  const signUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(loading) {
      return
    }

    if (!firstName || !email || !password || !confirmPassword) {
      setInfo("Preencha todos os campos")
      return
    } 


    if (password !== confirmPassword) {
      setInfo("As senhas não combinam")
      return
    }

     if (password.includes(" ")){
      setInfo("A senha não pode conter espaço")
      return
     }

     if (password.length < 8){
      setInfo("Mínimo de 8 caracters")
      return
     }

    setInfo("⠀")

    setLoading(true)
    const status = await register({ email });
    if (status === 200) {
      const [codeStatus, response] = await CodeConfirmation({ name: firstName, email })
      if (codeStatus === 200) {
        setHash(response.code)
        setLoading(false)
        return
      }

      setInfo(`${codeStatus} - Error`)
      setLoading(false)
      return
    }

    if (status === 401) {
      setInfo("Esse email já está registrado")
      setLoading(false)
      return
    }

    setInfo(`${status} - Error ao registrar conta`)
    setLoading(false)
  }

  const resendCode = async () => {
    if (!firstName || !email) {
      setInfo("Error ao reenviar código")
      return
    }

    setInfo("⠀")

    setLoadingResendCode(true)
    const [code, response] = await CodeConfirmation({ name: firstName, email })

    if (code === 200) {
      setInfo("Código reenviado")
      setHash(response.code)
      setLoadingResendCode(false)
      return
    }

    setInfo(`Erro ao reenviar código`)
    setLoadingResendCode(false)
    return
  }

  const registerAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(loading) {
      return
    }

    if (!firstName || !email || !password || !code || !hash) {
      return
    }

    setLoading(true)
    const status = await confirmCode({ code, hash})

    if (status === 401) {
      setInfo("Código errado")
      setLoading(false)
      return
    }

    if (status !== 200) {
      setInfo(`${status} - Error ao confirmar o código`)
      setLoading(false)
      return
    }


    const statusCode = await createUser({ first_name: firstName, last_name: lastName, email, password })

    if (statusCode === 201) {
      setLoading(false)
      setFirstName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      setHash("")
      setCode("")
      setLoading(false)

      navigate("/login")
      return
    }

    if (statusCode === 401) {
      setInfo("Esse e-mail já foi cadastrado")
      setLoading(false)
      return
    }


    setInfo(`Error ${statusCode}`)
    setLoading(false)
    return
  }

  if (loadingLogin) {
    return (
      <Loading />
    )
  }

  return (
    <Content>
      
      {
        !hash ? 
        (
          <Form onSubmit={(event) => signUp(event)}>
            <img src={logo} alt="" />
            <h1>Seja bem-vindo(a)</h1>
            <span>Por favor insira seus dados para realizar se registrar no site</span>
            <h4>{info}</h4>
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
                <input value={firstName} type="text" id='first-name' name='first-name' placeholder='Nome' onChange={(event) => setFirstName(event.target.value)} required />
              </div>
            </Field>

            <Field  style={{ marginTop: "12px"}}>
              <label htmlFor="name">Sobrenome</label>
              
              <div className="input-and-icon">
                <input value={lastName} type="text" id='last-name' name='last-name' placeholder='Sobrenome' onChange={(event) => setLastName(event.target.value)} />
              </div>
            </Field>

            <Field  style={{ marginTop: "12px"}}>
              <label htmlFor="email">E-mail</label>
              
              <div className="input-and-icon">
                <input value={email} type="email" id='email' name='email' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
              </div>
            </Field>

            <Field style={{ marginTop: "12px"}}>
              <label htmlFor="password">Senha</label>
              
              <div className="input-and-icon">
                <input type={ showPassword ? "text" : "password"} id='password' name='password' placeholder='Senha' onChange={(event) => setPassword(event.target.value)} required />
                
                { showPassword ? <EyeSlashIcon onClick={() => setShowPassword(false)} /> : <EyeIcon onClick={() => setShowPassword(true)} />}
              </div>
            </Field>

            <Field style={{ marginTop: "12px"}}>
              <label htmlFor="confirm-password">Confirma senha</label>
              
              <div className="input-and-icon">
                <input type={ showConfirmPassword ? "text" : "password"} id='confirm-password' name='confirm-password' placeholder='Confirmar senha' onChange={(event) => setConfirmPassword(event.target.value)} required />
                
                { showConfirmPassword ? <EyeSlashIcon onClick={() => setShowConfirmPassword(false)} /> : <EyeIcon onClick={() => setShowConfirmPassword(true)} />}
              </div>
            </Field>

            <Button style={{ marginTop: "24px"}} type='submit' >
              Registrar
            </Button>

            <span style={{ marginTop: "12px"}}>Já possui uma conta? <a href="/login">Login</a></span>
          </Form>
        ) 
        :
        (
          <Form onSubmit={(event) => registerAccount(event)}>
            <ArrowIcon className='back' onClick={() => setHash("")} />
            <img src={logo} alt="" />
            <h1>Código de Confirmação</h1>
            <span>Enviamos um código de confirmação para o e-mail {email}. Por favor insira ele abaixo</span>
            <h4>{info}</h4>
            <Field  style={{ marginTop: "12px"}}>
              <label htmlFor="code">Código</label>
              
              <div className="input-and-icon">
                <input value={code} defaultValue={code} max={6} maxLength={6} type="text" id='code' name='code' placeholder='Código' onChange={(event) => setCode(event.target.value)} required />
              </div>
            </Field>

            <Button style={{ marginTop: "24px"}} type='submit' >
              Registrar
            </Button>

            <span style={{ marginTop: "12px"}}>Já possui uma conta? <a href="/login">Login</a></span>
          </Form>
        ) 
      }
    </Content>
  )
}

export default Register