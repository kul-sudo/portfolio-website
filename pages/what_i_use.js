import Head from 'next/head'
import Image from 'next/image'
import { VStack, Grid, Text, Center, Box, Divider, Link, useColorModeValue } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import '@fontsource/quicksand/600.css'
import '@fontsource/quicksand/700.css'

const WhatIUse = () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Center mt="5rem">
        <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" rowGap="5rem" columnGap="10rem" id="use-items">
          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665316757/DSC00063_lpixuq.jpg" 
              alt="mouse"
              width="270%"
              height="190%"
              draggable={false}
              loading="eager"
              quality="100"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
            />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://a.co/d/18y6Mmg" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>Bloody A70</Link>
            </Box>
          </Box>

          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665316764/DSC00073_iwnxdb.jpg" 
              alt="chair"
              width="270%"
              height="190%"
              draggable={false}
              loading="eager"
              quality="100"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
            />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://a.co/d/10niyHY" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>ThunderX3 TC3BK</Link>
            </Box>
          </Box>

          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665316756/DSC00066_mdlw8e.jpg" 
              alt="keyboard"
              width="270%"
              height="190%"
              draggable={false}
              loading="eager"
              quality="100"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
            />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://a.co/d/bXnjhv7" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>Razer Cynosa Lite</Link>
            </Box>
          </Box>

          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665316757/DSC00089_ayxnxv.jpg" 
              alt="headphones"
              width="270%"
              height="190%"
              draggable={false}
              loading="eager"
              quality="100"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
              />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://amzn.eu/d/00AiAx7" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>Sennheiser HD 206</Link>
            </Box>
          </Box>
          
          <Popover>
            <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
              <Image 
                src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665319733/DSC00075_ygqgow_wlspi8.jpg" 
                alt="monitor"
                width="270%"
                height="190%"
                draggable={false}
                loading="eager"
                quality="100"
                style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
                />
              <Divider mt="-0.35rem"/>
              <Box display="flex" justifyContent="center" h="5rem">
                <PopoverTrigger>
                  <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">AOC i2475Pxqu</Link>
                </PopoverTrigger>
              </Box>
            </Box>
            <PopoverContent boxShadow="lg" bg="#27272a">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody color="white">Unfortunately, no link available</PopoverBody>
            </PopoverContent>
          </Popover>
        
          <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
            <Image 
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665316756/DSC00093_bufdoq.jpg" 
              alt="headphones"
              width="270%"
              height="190%"
              draggable={false}
              loading="eager"
              quality="100"
              style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
              />
            <Divider mt="-0.35rem"/>
            <Box display="flex" justifyContent="center" h="5rem">
              <Link color="white" href="https://amzn.eu/d/gJP6YRx" alignSelf="center" textAlign="center" fontSize="1.5rem" isExternal>Marantz Pro</Link>
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

export default WhatIUse
