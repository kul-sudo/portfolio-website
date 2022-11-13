import { useRouter } from 'next/router'
import Head from 'next/head'
import NextLink from 'next/link'
import Projects from '../../lib/projects.json'
import { Text, VStack, Box, Image, HStack, Link, Center, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import PageNotFound from '../../components/404Page'

const DevicePage = () => {
  const router = useRouter()
  
  if (!router.isReady) {
    return
  }

  const { project } = router.query

  if (!Object.keys(Projects).includes(project)) {
    return <PageNotFound />
  }

 return (
    <>
      <Head>
        <title>{`Cyril Tasman - ${Projects[project]['full-name']}`}</title>
      </Head>
      
      <Center mt="7rem">
        <HStack textAlign="center" fontWeight="700" fontSize="1.05rem">
          <Link><NextLink href="/my_projects">My projects</NextLink></Link>
          <ChevronRightIcon boxSize="2rem" />
          <Link><NextLink href={`/my_projects/${project}`}>{Projects[project]['full-name']}</NextLink></Link>
        </HStack>
      </Center>

      <VStack display="flex" justifyContent="center" alignItems="center" mt="1rem">
        <Box mx="1rem" padding="1rem" borderRadius="0.75rem" backgroundColor={useColorModeValue('#e1e1e1', '#191919')}>
          <Image 
            src={useColorModeValue(Projects[project].icon, Projects[project]['icon-dark-mode'])}
            alt="device"
            width={{ base: '15rem', '370px': '15rem' }}
            height={{ base: '18rem', '370px': '17rem' }}
            loading="eager"
            style={{ borderRadius: "5%", userSelect: "none" }}
          />
        </Box>
        <Text textAlign="center" fontSize="2.5rem" fontWeight="500">{Projects[project]['full-name']}</Text>
      </VStack>

      <Center>
        <Accordion allowMultiple mt="2rem" w="35%">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How I came up with the brainchild
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Projects[project]['how-i-came-up-with-the-brainchild']}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How the coding went
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Projects[project]['how-the-coding-went']}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How I promoted the game
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Projects[project]['how-i-promoted-the-game']}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </>
  )
}

export default DevicePage
