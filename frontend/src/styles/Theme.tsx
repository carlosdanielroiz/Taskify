import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'


export const theme: DefaultTheme = {
  colors: {
    primary: '#0266FF',
    secondary: '#2ff1b0',
    red: '#e72626',
    green: '#2bc945',
    yellow: '#f3a642',
    blue: '#2cbdf2',
    purple: '#6e3ff3',
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#f1f2f2',
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
