import { Box, Text, Button, VStack } from '@chakra-ui/react'
import GraphicsMouse from '../components/mouseGraphics'
import Navbar from '../components/Navbar'
import NextLink from 'next/link'
import '@fontsource/quicksand/600.css'

const PageNotFound = () => {
  return (
    <>
      <title>Cyril Tasman</title>
      <link rel="icon" href="/favicon.ico" />
      
      <Navbar />

      <Box mt="9rem">
        <GraphicsMouse />
      </Box>

      <VStack spacing={4} display="flex" justifyContent="center" mt="1rem">
        <Text fontSize="3rem" textAlign="center" px="1rem">Page not found</Text>
        <NextLink href="/">
          <Button colorScheme="teal" fontSize="1.5rem">
            Go to the home page
          </Button>
        </NextLink>
      </VStack>
    </>
  )
}

export default PageNotFound
