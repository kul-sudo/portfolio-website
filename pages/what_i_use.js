import Head from 'next/head'
import NextLink from 'next/link'
import { Grid, Center, Box, Divider, Link, Image, useColorModeValue } from '@chakra-ui/react'
import Paths from '../lib/device_posts.json'
import Navbar from '../components/Navbar'

const WhatIUse = () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman</title>
        <link rel="icon" href="https://res.cloudinary.com/dsliut4oh/image/upload/v1666902603/logo_sta6iy.png" />
      </Head>

      <Navbar />

      <Center mt="5rem">
        <Grid templateColumns={{ base: "repeat(1, 1fr)", "741px": "repeat(2, 1fr)" }} rowGap="5rem" columnGap="10rem" id="use-items">
          {Object.keys(Paths).map((key) => (
            <NextLink href={"what_i_use/"+key}>
              <Box borderRadius="5%" w="16rem" bg={useColorModeValue('#212121', '#e3e3e3')} _hover={{transform: "translateY(-3px)"}} transition="0.2s" cursor="pointer">
                <Image
                  src={Paths[key][1]} 
                  alt="device"
                  loading="eager"
                  style={{borderTopLeftRadius: "5%", borderTopRightRadius: "5%", userSelect: "none"}}
                />
                <Divider />
                <Box display="flex" justifyContent="center" h="5rem">
                  <Link color={useColorModeValue('#ffffff', '#000000')} alignSelf="center" textAlign="center" fontSize="1.5rem" fontWeight="600">{Paths[key][0]}</Link>
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
