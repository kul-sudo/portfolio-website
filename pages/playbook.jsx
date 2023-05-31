import Head from 'next/head'
import NextLink from 'next/link'
import { Center, Text, Image, VStack, useColorModeValue, IconButton, Box, AbsoluteCenter } from '@chakra-ui/react'
import Projects from '../lib/projects.json'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman - Playbook</title>
      </Head>

      <Center mt="0.5%">
        <VStack spacing="1.5rem">
          {Object.keys(Projects).map(key => (
            <NextLink href={Projects[key].link} target="_blank">
              <VStack position="relative" rounded="xl" width="15rem" height="12rem" transition="transform 1s" _hover={{ transform: 'scale(1.1)' }} backgroundColor={useColorModeValue('#e1e1e1', '#1b1b1b')}>
                <VStack
                  position="absolute"
                  top="5"
                >
                  <Box width="7rem" height="3.5rem" position="relative">
                    <AbsoluteCenter>
                      <Image
                        src={useColorModeValue(Projects[key].icon, Projects[key]['icon-dark-mode'])}
                        width="3rem"
                        height="auto"
                        loading="lazy"
                        style={{borderRadius: "5%", userSelect: "none"}}
                      />
                    </AbsoluteCenter>
                  </Box>
                  <Text fontWeight="700" fontSize="1.5rem" textAlign="center">{Projects[key]['full-name']}</Text>
                </VStack>
                <IconButton
                  position="absolute"
                  bottom="5"
                  colorScheme="teal"
                  icon={<ExternalLinkIcon boxSize="1.5rem" />}
                />
              </VStack>
            </NextLink>
          ))}
        </VStack>
      </Center>
    </>
  )
}
