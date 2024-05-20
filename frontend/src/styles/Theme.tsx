import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'


export const theme: DefaultTheme = {
  colors: {
    white: '#F8F6FA',
    black: '#000000',
    gray100: '#e0e1e4',
    gray400: '#6a6c6f',
    gray900: '#262728',
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
