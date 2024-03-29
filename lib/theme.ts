import type { GlobalStyleProps } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Manrope } from 'next/font/google'

const font = Manrope({ preload: false })

const breakpoints = {
  '1100px': '1100px',
  '885px': '885px',
  '700px': '700px',
  '540px': '540px',
  '500px': '500px',
  '462px': '462px',
  '440px': '440px',
  '369px': '369px',
  '356px': '356px',
  '340px': '340px',
  '330px': '330px'
}

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode('#d1d1d1', '#202023')(props)
    }
  })
}

const fonts = {
  body: font.style.fontFamily,
  heading: font.style.fontFamily
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export default extendTheme({ fonts, config, styles, breakpoints })
