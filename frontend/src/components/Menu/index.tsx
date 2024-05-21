import React from 'react'
import { Container, Link, Logout } from './style'
import logo from "../../assets/images/logo.png"
import avatar from "../../assets/images/avatar.png"
import { ReactComponent as DashIcon } from '../../assets/icons/dash.svg'
import { ReactComponent as CalendarIcon } from '../../assets/icons/calendar.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as VerifyIcon } from '../../assets/icons/verify.svg'
import { ReactComponent as SettingIcon } from '../../assets/icons/setting.svg'
import { ReactComponent as MessagesIcon } from '../../assets/icons/messages.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'
import { ReactComponent as SmsIcon } from '../../assets/icons/sms.svg'

function Menu() {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
        <span>Taskify</span>
      </div>

      <nav>
        <h5>MAIN</h5>
        <Link to="/home">
          <div className="active"></div>
          <DashIcon className='icon' />
          <span>Dashboard</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Link to="/calendario">
          <div className="active"></div>
          <CalendarIcon className='icon-2' />
          <span>Calendário</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Link to="/mensagens">
          <div className="active"></div>
          <MessagesIcon className='icon-2' />
          <span>Mensagens</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Link to="/convites">
          <div className="active"></div>
          <SmsIcon className='icon-2' />
          <span>Convites</span>
          <ArrowIcon className='arrow' />
        </Link>
      </nav>

      <nav className="footer">
        <Link to="/configuracoes">
          <div className="active"></div>
          <SettingIcon className='icon-2' />
          <span>Confirgurações</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Logout>
          <div className="active"></div>
          <LogoutIcon className='icon' />
          <span>Sair</span>
          <ArrowIcon className='arrow' />
        </Logout>

        <a href="" className="user">
          <img src={avatar} alt="" />
          <div className="text">
            <div className="name-and-verify">
              <h4>Nome</h4>
              <VerifyIcon />
            </div>
            <span>nome@email.com</span>
          </div>

          <ArrowIcon className='arrow' />
        </a>
      </nav>
    </Container>
  )
}

export default Menu