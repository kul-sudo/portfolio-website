import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'

const Hydrated = ({ children }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydration(true);
    }
  }, []);

  return hydration ? children : null
}

function MyApp({ Component, pageProps }) {
  return (
    <Hydrated>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Hydrated>
  )
}

export default MyApp
