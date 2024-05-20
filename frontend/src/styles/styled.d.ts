import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      white: string
      black: string
      gray100: string
      gray400: string
      gray900: string
    }
  }
}
