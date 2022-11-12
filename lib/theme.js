import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = {
  '1100px': '1100px',
  '741px': '741px',
  '885px': '885px',
  '370px': '370px'
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#d1d1d1', '#202020')(props)
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
