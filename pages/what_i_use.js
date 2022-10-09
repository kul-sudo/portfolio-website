import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { Grid, Center, Box, Divider, Link } from '@chakra-ui/react'
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
          <NextLink href="what_i_use/bloody-a70">
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
                <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">Bloody A70</Link>
              </Box>
            </Box>
          </NextLink>

          <NextLink href="what_i_use/thunderx3-tc3bk">
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
                <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">ThunderX3 TC3BK</Link>
              </Box>
            </Box>
          </NextLink>

          <NextLink href="what_i_use/razer-cynosa-lite">
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
                <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">Razer Cynosa Lite</Link>
              </Box>
            </Box>
          </NextLink>

          <NextLink href="what_i_use/sennheiser-hd-206">
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
                <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">Sennheiser HD 206</Link>
              </Box>
            </Box>
          </NextLink>
          
          <NextLink href="what_i_use/aoc-i2475pxqu">
            <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
              <Image 
                src="https://res.cloudinary.com/dsliut4oh/image/upload/v1665319733/DSC00075_ygqgow_wlspi8.jpg" 
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
                <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">AOC i2475Pxqu</Link>
              </Box>
            </Box>
          </NextLink>

          <NextLink href="what_i_use/marantz-pro">
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
                <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">Marantz Pro</Link>
              </Box>
            </Box>
          </NextLink>
        </Grid>
      </Center>
    </>
  )
}

export default WhatIUse
