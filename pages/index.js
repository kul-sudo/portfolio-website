import Head from 'next/head'
import { VStack, Text, Link, Center, Box, Stack, useColorModeValue } from '@chakra-ui/react'
import GraphicsMouse from '../components/mouseGraphics'
import useLanguage from '../lib/language'

const languageSettings = {
  'hello': {
    'english': 'Hello! I am a backend developer',
    'spanish': '¡Hola! Soy un desarrollador back-end'
  },
  'captions': {
    'technologies': {
      'english': 'Technologies',
      'spanish': 'Tecnologías'
    },
    'my_projects': {
      'english': 'My projects',
      'spanish': 'Mis proyectos'
    },
    'hard_skills': {
      'english': 'Hard skills',
      'spanish': 'Habilidades duras'
    }
  },
  'boxes_content': {
    'fluent_english': {
      'english': 'Fluent English',
      'spanish': 'Ingles fluido'
    },
    'stress_tolerance': {
      'english': 'Stres tolerance',
      'spanish': 'Tolerancia al estrés'
    }
  }
}

const Home = () => {
  const language = useLanguage(state => state.language)

  return (
    <>
      <Head>
        <title>Cyril Tasman</title>
        <meta name="description" content="My personal portfolio" />
      </Head>

      <Center mt="4.7%">
        <Box backgroundColor="#525252" borderRadius="0.75rem" paddingY="1rem" paddingX="1.8rem" mx={{ base: '1rem', '1100px': '0' }} id="upper-desc">
          <Text color="white" fontSize="1.8rem" fontWeight="600" textAlign="center">{languageSettings.hello[language]}</Text>
        </Box>
      </Center>

      <Box mt="0.9rem">
        <GraphicsMouse />
      </Box>
      
      <Center mt="1rem">
        <Stack direction={{ base: 'column', '741px': 'row' }} spacing={{ base: '2rem', '741px': '10rem' }}>
          <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #6366f1, #a855f7, #ec4899)" borderRadius="0.3rem" w="13rem" h="16rem" style={{ transform: 'skew(15deg)' }}>
            <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
              <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{ transform: 'skew(-15deg)' }}>{languageSettings.captions.technologies[language]}</Text>
              <Text color="black" fontWeight="600" textAlign="center" style={{ transform: 'skew(-15deg)' }}>NextJS<br />React<br />JavaScript<br />Python<br />SQL</Text> 
            </VStack>
          </VStack>

          <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #ec4899, #eab308)" borderRadius="0.3rem" w="13rem" h="16rem" style={{ transform: 'skew(15deg)' }}>
            <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
              <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{ transform: 'skew(-15deg)' }}>{languageSettings.captions.my_projects[language]}</Text>
              <VStack pt="1.1rem" fontWeight="600" textAlign="center" textDecoration="underline">
                <Link color="black" href="https://github.com/kul-sudo/eportal" isExternal style={{ transform: 'skew(-15deg)' }}>eportal</Link> 
                <Link color="black" href="https://github.com/kul-sudo/Smiling-Zombies" isExternal style={{ transform: 'skew(-15deg)' }}>smiling zombies</Link>
              </VStack>
            </VStack>
          </VStack>
        </Stack>
      </Center>

      <Center mt="2rem">
        <VStack display="flex" justifyContent="center" bgGradient="linear(to-r, #4dff03, #00d0ff)" borderRadius="0.3rem" w="13rem" h="16rem" style={{ transform: 'skew(15deg)' }}>
          <VStack backdropFilter="auto" backdropBlur="0.625rem" w="17.5rem" h="12rem" borderRadius="0.3rem" backgroundColor="hsla(0, 0%, 100%, 0.05)" boxShadow={useColorModeValue('lg', 'none')}>
            <Text mt="1.1rem" color="black" fontWeight="700" textAlign="center" style={{ transform: 'skew(-15deg)' }}>{languageSettings.captions.hard_skills[language]}</Text>
            <Box pt="1.5rem">
              <Text color="black" fontWeight="600" textAlign="center" style={{ transform: 'skew(-15deg)' }}>{languageSettings.boxes_content.fluent_english[language]}<br/>{languageSettings.boxes_content.stress_tolerance[language]}</Text> 
            </Box>
          </VStack>
        </VStack>
      </Center>
    </>
  )
}

export default Home
