import React, { useContext, useEffect, useState } from 'react'
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
import { UserContext } from '../../context/UserContext'
import { useLocation } from 'react-router-dom'

function Menu() {

  const { logout, user } = useContext(UserContext)

  const [classMenu, setClassMenu] = useState<string>("")

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      setClassMenu("desactive")
      return
    }

    setClassMenu("")
  }, [location])

  return (
    <Container className={classMenu}>
      <div className="logo">
        <img src={logo} alt="" />
        <span>Taskify</span>
      </div>

      <nav>
        <h5>MENU</h5>
        <Link to="/">
          <DashIcon className='icon' />
          <span>Dashboard</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Link to="/calendario">
          <CalendarIcon className='icon-2' />
          <span>Calendário</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Link to="/mensagens">
          <MessagesIcon className='icon-2' />
          <span>Mensagens</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Link to="/convites">
          <SmsIcon className='icon-2' />
          <span>Convites</span>
          <ArrowIcon className='arrow' />
        </Link>
      </nav>

      <nav className="footer">
        <Link to="/configuracoes">
          <SettingIcon className='icon-2' />
          <span>Confirgurações</span>
          <ArrowIcon className='arrow' />
        </Link>

        <Logout onClick={() => logout()}>
          <LogoutIcon className='icon' />
          <span>Sair</span>
          <ArrowIcon className='arrow' />
        </Logout>

        <a href="" className="user">
          <img src={user?.picture ? user?.picture : avatar} alt="" />
          <div className="text">
            <div className="name-and-verify">
              <h4>{user?.first_name}</h4>
              <VerifyIcon />
            </div>
            <span>{user?.email}</span>
          </div>

          <ArrowIcon className='arrow' />
        </a>
      </nav>
    </Container>
  )
}

export default Menu