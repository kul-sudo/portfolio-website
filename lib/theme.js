import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = {
  '827px': '827px'
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#e3e3e3', '#202023')(props)
    }
  })
}

const fonts = {
  body: `'Quicksand', sans-serif`
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

export default extendTheme({ fonts, config, styles, breakpoints })
