import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { Theme } from './styles/Theme'
import { Normalize } from 'styled-normalize'
import { UserProvider } from './context/UserContext'

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Theme>
          <AppRoutes />
          <Normalize />
        </Theme>
      </UserProvider>
    </BrowserRouter>
  )
}
