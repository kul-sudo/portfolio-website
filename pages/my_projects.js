import Head from 'next/head'
import NextLink from 'next/link'
import { Grid, Center, Text, Image, VStack, useColorModeValue } from '@chakra-ui/react'
import Projects from '../lib/projects.json'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const WhatIUse = () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman - My projects</title>
      </Head>

      <Center mt="0.5%">
        <Grid templateColumns={{ base: "repeat(1, 1fr)", "885px": "repeat(2, 1fr)" }} rowGap="2rem" columnGap="6rem" id="use-items">
          {Object.keys(Projects).map(key => (
            <NextLink href={Projects[key].link} target="_blank">
              <VStack justifyContent="center" width="15rem" height="18rem" borderRadius="0.75rem" transition="transform 1s" _hover={{ transform: 'scale(1.1)' }} backgroundColor={useColorModeValue('#e1e1e1', '#1b1b1b')}>
                <Image
                  src={useColorModeValue(`https://imagecropper-kul-sudo.vercel.app/?width=112&url=${Projects[key].icon}`, `https://imagecropper-kul-sudo.vercel.app/?width=112&url=${Projects[key]['icon-dark-mode']}`)} 
                  height="auto"
                  loading="lazy"
                  style={{borderRadius: "5%", userSelect: "none"}}
                />
                <VStack>
                  <Text fontWeight="700" fontSize="1.8rem" textAlign="center">{Projects[key]['full-name']}</Text>
                  <ExternalLinkIcon boxSize="2rem" />
                </VStack>
              </VStack>
            </NextLink>
          ))}
        </Grid>
      </Center>
    </>
  )
}

export default WhatIUse
