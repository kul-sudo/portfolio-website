import type { FC } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Center, Text, Image, VStack, IconButton, Box, AbsoluteCenter, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Projects from '../lib/projects.json'

type LogoProps = {
  projects: Record<string, Record<string, string>>;
  projectKey: string
}

const Logo: FC<LogoProps> = ({ projects, projectKey }) => {
  return (
    <Image
      src={useColorModeValue(projects[projectKey].icon, projects[projectKey]['icon-dark-mode'])}
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
     
      <Center>
        <Text textAlign="center" fontWeight="bold" fontSize="3rem" mb="1rem">
          Playbook
        </Text>
      </Center>

      <Center mt="0.5%">
        <VStack spacing="1.5rem">
          {Object.keys(Projects).map((key, index) => {
            return (
              <NextLink key={index} href={Projects[key].link} target="_blank">
                <VStack position="relative" rounded="xl" width="16rem" height="12rem" backgroundColor={backgroundColor}>
                  <VStack
                    position="absolute"
                    top="5"
                  >
                    <Box width="7rem" height="3.5rem" position="relative">
                      <AbsoluteCenter>
                        <Logo
                          projects={Projects}
                          projectKey={key}
                        />
                      </AbsoluteCenter>
                    </Box>
                    <Text fontWeight="700" fontSize="1.5rem" textAlign="center">{Projects[key]['full-name']}</Text>
                  </VStack>
                  <IconButton
                    position="absolute"
                    bottom="5"
                    rounded="full"
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
