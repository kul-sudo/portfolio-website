import Head from 'next/head'
import NextLink from 'next/link'
import { Grid, Center, Text, Image, VStack, useColorModeValue } from '@chakra-ui/react'
import Projects from '../lib/projects.json'

const WhatIUse = () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman - My projects</title>
      </Head>

      <Center mt="6rem">
        <Grid templateColumns={{ base: "repeat(1, 1fr)", "885px": "repeat(2, 1fr)" }} rowGap="5rem" columnGap="6rem" id="use-items">
          {Object.keys(Projects).map((key) => (
            <NextLink href={`my_projects/${key}`}>
              <VStack padding="1rem" borderRadius="0.75rem" backgroundColor={useColorModeValue('#e1e1e1', '#191919')}>
                <Image
                  src={useColorModeValue(Projects[key].icon, Projects[key]['icon-dark-mode'])} 
                  alt="device"
                  width="10rem"
                  height="12rem"
                  loading="eager"
                  style={{borderRadius: "5%", userSelect: "none"}}
                  />
                <Text fontWeight="700" fontSize="1.8rem">{Projects[key]['full-name']}</Text>
              </VStack>
            </NextLink>
          ))}
        </Grid>
      </Center>
    </>
  )
}

export default WhatIUse
