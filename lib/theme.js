import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const breakpoints = {
  '1100px': '1100px',
  '741px': '741px',
  '700px': '700px',
  '885px': '885px',
  '540px': '540px',
  '500px': '500px',
  '440px': '440px',
  '340px': '340px',
  '330px': '330px'
}

const styles = {
  global: props => ({
    body: {
      bg: mode('#d1d1d1', '#202023')(props)
    }
  })
}

const fonts = {
  body: `'Quicksand', sans-serif`,
  heading: `'Quicksand', sans-serif`
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export default extendTheme({ fonts, config, styles, breakpoints })
