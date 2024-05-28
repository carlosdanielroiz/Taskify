import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import MainPage from './pages/Main'
import Login from './pages/Login'
import { useContext, useEffect } from 'react'
import { UserContext } from './context/UserContext'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Main/Home'
import Calendar from './pages/Main/Calendar'
import Messages from './pages/Main/Messages'
import Invitation from './pages/Main/Invitation'

export function AppRoutes() {

  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if ((location.pathname.startsWith("/login") || location.pathname.startsWith("/registre") || location.pathname.startsWith("/esqueceu-a-senha") && !user)){
      navigate(location.pathname)
      
    } else if (!user) {
      navigate("/login")
      return
    }

    navigate(location.pathname)
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/registre' element={<Register />} />
      <Route path='/esqueceu-a-senha' element={<ForgotPassword />} />

      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<Home />} />
        <Route path='/calendario' element={<Calendar />} />
        <Route path='/configuracoes' element={<Calendar />} />
        <Route path='/mensagens' element={<Messages />} />
        <Route path='/convites' element={<Invitation />} />
      </Route>
    </Routes>
  )
}
