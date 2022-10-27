import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import '../styles/globals.css'

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
        <Component {...pageProps} />
      </ChakraProvider>
    </Hydrated>
  )
}

export default MyApp
