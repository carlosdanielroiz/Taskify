import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import MainPage from './pages/Main'
import Login from './pages/Login'
import { useContext, useEffect } from 'react'
import { UserContext } from './context/UserContext'
import Register from './pages/Register'

export function AppRoutes() {

  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if ((location.pathname.startsWith("/login") || location.pathname.startsWith("/registre") && !user)){
      navigate(location.pathname)
      
    } else if (!user) {
      navigate("/login")
      return
    }

    navigate(location.pathname)
  }, [])

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registre' element={<Register />} />
    </Routes>
  )
}
