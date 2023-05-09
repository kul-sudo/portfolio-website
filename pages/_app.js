import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import ProgressBar from '@badrap/bar-of-progress'
import theme from '../lib/theme'
import '../styles/globals.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true)
    }
  }, [])

  return hydration ? children : null
}

const progress = new ProgressBar({
  size: 2,
  color: 'teal',
  className: 'bar-of-progress',
  delay: 100
})

export default ({ Component, pageProps }) => {
  const router = useRouter() 

  useEffect(() => {
    router.events.on('routeChangeStart', progress.start)
    router.events.on('routeChangeComplete', progress.finish)
    router.events.on('routeChangeError', progress.finish)

    return () => {
      router.events.off('routeChangeStart', progress.start)
      router.events.off('routeChangeComplete', progress.finish)
      router.events.off('routeChangeError', progress.finish)
    }
  }, [router])

  return (
    <Hydrated>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Hydrated>
  )
}
