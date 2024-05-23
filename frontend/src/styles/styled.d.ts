import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      primary: string
      secondary: string
      red: string
      white: string
      black: string
      gray50: string
      gray100: string
      gray400: string
      gray900: string
    }
  }
}
