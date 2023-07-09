import type { FC } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Center, Text, Image, VStack, IconButton, Box, AbsoluteCenter, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Projects from '../lib/projects.json'

type LogoProps = {
  projects: Record<string, Record<string, string>>;
  key: string
}

const Logo: FC<LogoProps> = ({ projects, key }) => {
  return (
    <Image
      src={useColorModeValue(projects[key].icon, projects[key]['icon-dark-mode'])}
      width="3rem"
      height="auto"
      loading="lazy"
      style={{ borderRadius: '5%', userSelect: 'none' }}
      alt="project-icon"
    />
  )
}

const Playbook: FC = () => {
  const backgroundColor = useColorModeValue('#e1e1e1', '#1b1b1b')

  return (
    <>
      <Head>
        <title>Cyril Tasman - Playbook</title>
      </Head>

      <Center mt="0.5%">
        <VStack spacing="1.5rem">
          {Object.keys(Projects).map((key, index) => {
            return (
              <NextLink key={index} href={Projects[key].link} target="_blank">
                <VStack position="relative" rounded="xl" width="15rem" height="12rem" transition="transform 1s" _hover={{ transform: 'scale(1.1)' }} backgroundColor={backgroundColor}>
                  <VStack
                    position="absolute"
                    top="5"
                  >
                    <Box width="7rem" height="3.5rem" position="relative">
                      <AbsoluteCenter>
                        <Logo
                          projects={Projects}
                          key={key}
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
                    aria-label="open-link"
                  />
                </VStack>
              </NextLink>
            )
          })}
        </VStack>
      </Center>
    </>
  )
}

export default Playbook
