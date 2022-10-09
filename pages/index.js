import Head from 'next/head'
import { VStack, Text, Grid, Link, Center, Box, useColorModeValue } from '@chakra-ui/react'
import GraphicsMouse from '../components/mouseGraphics'
import Navbar from '../components/Navbar'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Center mt="5rem">
        <Box backgroundColor="#525252" borderRadius="0.75rem" paddingY="1rem" paddingX="1.8rem" id="upper-desc">
          <Text color="white" fontSize="1.8rem" fontWeight="600" textAlign="center">Hello! I am a backend developer</Text>
        </Box>
      </Center>

      <GraphicsMouse/>
      
      <Center>
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(2, 1fr)" gap="10rem" id="gradient-boxes">
          <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #6366f1, #a855f7, #ec4899)" borderRadius="0.3rem" w="13rem" h="16rem" style={{transform: 'skew(15deg)'}} id="technologies">
            <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
              <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{transform: 'skew(-15deg)'}}>Technologies</Text>
              <Text color="black" fontWeight="600" textAlign="center" style={{transform: 'skew(-15deg)'}}>NextJS<br/>React<br/>JavaScript<br/>Python<br/>SQL</Text> 
            </VStack>
          </VStack>

          <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #ec4899, #eab308)" borderRadius="0.3rem" w="13rem" h="16rem" style={{transform: 'skew(15deg)'}} id="my-projects">
            <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
              <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{transform: 'skew(-15deg)'}}>My projects</Text>
              <VStack pt="1.1rem" fontWeight="600" textAlign="center" textDecoration="underline">
                <Link color="black" href="https://github.com/kul-sudo/eportal" isExternal style={{transform: 'skew(-15deg)'}}>eportal</Link> 
                <Link color="black" href="https://github.com/kul-sudo/Smiling-Zombies" isExternal style={{transform: 'skew(-15deg)'}}>smiling zombies</Link>
              </VStack>
            </VStack>
          </VStack>
        </Grid>
      </Center>

      <Center mt="2rem">
        <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #4dff03, #00d0ff)" borderRadius="0.3rem" w="13rem" h="16rem" style={{transform: 'skew(15deg)'}}>
          <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
            <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{transform: 'skew(-15deg)'}}>Hard skills</Text>
            <Box pt="1.5rem">
              <Text color="black" fontWeight="600" textAlign="center" style={{transform: 'skew(-15deg)'}}>Solid English<br/>Stress tolerance</Text> 
            </Box>
          </VStack>
        </VStack>
      </Center>
    </>
  )
}

export default Home
