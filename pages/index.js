import Head from 'next/head'
import NextLink from 'next/link'
import { VStack, Text, Link, Center, Box, Stack, HStack, useColorModeValue, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import GraphicsMouse from '../components/GraphicsMouse'

export default () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman</title>
        <meta name="description" content="My personal portfolio" />
      </Head>

      <Center>
        <Box backgroundColor="#525252" borderRadius="0.75rem" paddingY="1rem" paddingX="1.8rem" mx={{ base: '1rem', '1100px': '0' }} id="upper-desc">
          <Text color="white" fontSize="1.8rem" fontWeight="600" textAlign="center">Hello! I am a backend developer. <br /> I love doing the under-the-hood stuff!</Text>
        </Box>
      </Center>

      <Box mt="0.9rem">
        <GraphicsMouse />
      </Box>
      
      <Center mt="1rem">
        <Stack direction={{ base: 'column', '1100px': 'row' }} spacing={{ base: '2rem', '1100px': '10rem' }}>
          <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #4dff03, #00d0ff)" borderRadius="0.3rem" w="13rem" h="16rem" style={{ transform: 'skew(15deg)' }}>
            <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
              <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{ transform: 'skew(-15deg)' }}>Hard skills</Text>
              <Box pt="1.5rem">
                <Text color="black" fontWeight="600" textAlign="center" style={{ transform: 'skew(-15deg)' }}>Fluent English<br/>Stress tolerance</Text> 
              </Box>
            </VStack>
          </VStack>

          <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #6366f1, #a855f7, #ec4899)" borderRadius="0.3rem" w="13rem" h="16rem" style={{ transform: 'skew(15deg)' }}>
            <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
              <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{ transform: 'skew(-15deg)' }}>Technologies</Text>
              <Text color="black" fontWeight="600" textAlign="center" style={{ transform: 'skew(-15deg)' }}>NextJS<br />React<br />JavaScript<br />Python<br />SQL</Text> 
            </VStack>
          </VStack>

          <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #ec4899, #eab308)" borderRadius="0.3rem" w="13rem" h="16rem" style={{ transform: 'skew(15deg)' }}>
            <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
              <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{ transform: 'skew(-15deg)' }}>My projects</Text>
              <VStack spacing="0" style={{ transform: 'skew(-15deg)' }} pt="1.3rem" fontWeight="600" textAlign="center" textDecoration="none">
                <Text color="black">Can be found in</Text>
                <NextLink href="/my_projects" target="_blank">
                  <HStack>
                    <Link color="black" isExternal>my projects</Link> 
                    <ExternalLinkIcon color="black" />
                  </HStack>
                </NextLink>
              </VStack>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </>
  )
}
