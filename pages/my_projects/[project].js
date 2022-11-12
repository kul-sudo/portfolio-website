import { useRouter } from 'next/router'
import Head from 'next/head'
import NextLink from 'next/link'
import Projects from '../../lib/projects.json'
import { Text, VStack, Box, Image, HStack, Link, Center, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, UnorderedList, ListItem, useColorModeValue } from '@chakra-ui/react'
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

  const projectIsEportal = project === 'eportal'

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
        <Accordion allowToggle allowMultiple mt="2rem" w="35%">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {projectIsEportal ? 'How I came up with the brainchild' : 'How I came up with the idea of creating a new version of eportal'}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {projectIsEportal ? 'Trying to stick to the right branch of programming, I found out about AI. I needed to come up with a solid brainchild which could be subtly related to the AI and be relatively simple. At that time I was really interested in the evolution of species, so I combined those two interests and got this brainchild.' : 'Eportal resembles a research dedicated to evolution and I thought that many people would not be interested in it, so I decided to make a game dedicated to evolution which would be able to be actually played. Not to lose the productiveness I decided to go with the same team as when it came to eportal.'}
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
              {projectIsEportal ? 'Every single day I went to school (I was 12 years old then), came back home, ate some food, did my homework and coded immensely hard with almost no rest. And in a few months of coding and constantly rebuilding the game I managed to release it and right away get around 10 stars on GitHub and 30 likes in the community where it was promoted.' : 'Making this project was relatively easier than making the original version of it as the graphics had already been coded. Turning this project into a game was still quite hard, though.'}
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
              {projectIsEportal ? 'I needed to find a free way to promote the game, and I eventually came up with the idea of asking the admin of a community in which projects of beginners where posted to post my game. The admin did it, and the idea turned out to be really successful.' : 'I did not want to risk the success of the previous version of this game, so I decided to do the same: I came up with the idea of asking the admin of a community in which projects of beginners where posted to post my game.'}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </>
  )
}

export default DevicePage
