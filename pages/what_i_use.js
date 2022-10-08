import Head from 'next/head'
import Image from 'next/image'
import { Grid, Text, Center, Stack, Box, Divider, Link, useColorModeValue, VStack } from '@chakra-ui/react'
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

      <Navbar/>

      <Center mt="2.5rem">
        <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" rowGap="5rem" columnGap="10rem" id="use-items">
          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665162054/DSC00030_f9cckt.jpg" 
              alt="mouse"
              width="255%"
              height="190%"
              draggable={false}
              loading="eager"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
            />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://a.co/d/18y6Mmg" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>Bloody A70</Link>
            </Box>
          </Box>

          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665227302/DSC00038_pv6wun.jpg" 
              alt="chair"
              width="255%"
              height="190%"
              draggable={false}
              loading="eager"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
            />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://a.co/d/10niyHY" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>ThunderX3 TC3BK</Link>
            </Box>
          </Box>

          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665166147/my_keyboard_pxdmqw.jpg" 
              alt="chair"
              width="255%"
              height="190%"
              draggable={false}
              loading="eager"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
            />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://a.co/d/bXnjhv7" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>Razer Cynosa Lite</Link>
            </Box>
          </Box>
        </Grid>
      </Center>

      <VStack spacing={3}>
        <Text display="inline-block" color="white" borderRadius="xl" py="0.2rem" px="0.5rem" bg="#181818" mt="2.5rem" fontSize="2rem">Why do I have this setup?</Text>
      </VStack>
    </>
  )
}

export default Home
