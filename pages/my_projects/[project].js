import { useRouter } from 'next/router'
import Head from 'next/head'
import NextLink from 'next/link'
import Projects from '../../lib/projects.json'
import { Text, VStack, Box, Image, HStack, Link, Center, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import PageNotFound from '../../components/404Page'
import useLanguage from '../../lib/language'

const languageSettings = {
  'routes': {
    'my_projects': {
      'english': 'My projects',
      'spanish': 'Mis proyectos'
    } 
  },
  'accordion': {
    'how_i_came_up_with_the_brainchild': {
      'english': 'How I came up with the brainchild',
      'spanish': 'Cómo se me ocurrió la idea'
    },
    'how_the_coding_went': {
      'english': 'How the coding went',
      'spanish': 'Cómo fue la codificación'
    },
    'how_i_promoted_the_game': {
      'english': 'How I promoted the game',
      'spanish': 'Cómo promocioné el juego'
    }
  }
}

const DevicePage = () => {
  const language = useLanguage(state => state.language)
  
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
          <Link><NextLink href="/my_projects">{languageSettings.routes.my_projects[language]}</NextLink></Link>
          <ChevronRightIcon boxSize="2rem" />
          <Link><NextLink href={`/my_projects/${project}`}>{Projects[project]['full-name']}</NextLink></Link>
        </HStack>
      </Center>

      <VStack display="flex" justifyContent="center" alignItems="center" mt="1rem">
        <Box mx="1rem" padding="1rem" borderRadius="0.75rem" backgroundColor={useColorModeValue('#e1e1e1', '#1b1b1b')}>
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
        <Accordion allowMultiple mt="2rem" w="40rem" mx="1rem">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {languageSettings.accordion.how_i_came_up_with_the_brainchild[language]}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Projects[project]['how-i-came-up-with-the-brainchild'][language]}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {languageSettings.accordion.how_the_coding_went[language]}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Projects[project]['how-the-coding-went'][language]}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {languageSettings.accordion.how_i_promoted_the_game[language]}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Projects[project]['how-i-promoted-the-game'][language]}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </>
  )
}

export default DevicePage
