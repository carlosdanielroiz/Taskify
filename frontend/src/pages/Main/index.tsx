import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'
import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  )
}
