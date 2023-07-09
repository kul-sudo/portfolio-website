import type { FC } from 'react'
import { Box, Text, Button, VStack } from '@chakra-ui/react'
import GraphicsMouse from './GraphicsMouse'
import NextLink from 'next/link'

const Page404: FC = () => {
  return (
    <>
      <title>Cyril Tasman</title>
      <link rel="icon" href="https://res.cloudinary.com/dsliut4oh/image/upload/v1666902603/logo_sta6iy.png" />

      <Box mt="1rem">
        <GraphicsMouse />
      </Box>

      <VStack spacing={4} display="flex" justifyContent="center">
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

export default Page404
