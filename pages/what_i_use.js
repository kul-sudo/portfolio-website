import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { Grid, Center, Box, Divider, Link } from '@chakra-ui/react'
import Paths from '../lib/device_posts.json'
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
          {Object.keys(Paths).map((key) => (
            <NextLink href={"what_i_use/"+key}>
              <Box borderRadius="5%" w="16rem" bg="#181818" _hover={{transform: "translateY(-3px)"}} transition="0.2s">
                <Image 
                  src={Paths[key][1]} 
                  alt="device"
                  width="270%"
                  height="190%"
                  draggable={false}
                  loading="eager"
                  priority
                  quality="100"
                  style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
                  />
                <Divider mt="-0.35rem"/>
                <Box display="flex" justifyContent="center" h="5rem">
                  <Link color="white" alignSelf="center" textAlign="center" fontSize="1.5rem">{Paths[key][0]}</Link>
                </Box>
              </Box>
            </NextLink>
          ))}
        </Grid>
      </Center>
    </>
  )
}

export default WhatIUse
