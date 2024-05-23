import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'
import { Container } from './styles'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'
import Loading from '../../components/Loading'

export default function Main() {

  const { loadingLogin } = useContext(UserContext)

  if (loadingLogin) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  )
}
