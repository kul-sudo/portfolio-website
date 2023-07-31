import type { FC } from 'react'
import Head from 'next/head'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, HStack, Hide, Image, Show, Text, VStack } from '@chakra-ui/react'
import TechnologiesAndLanguages from '../lib/technologies_and_languages.json'

const TechnologiesAndLanguagesComponent: FC = () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman - technologies</title>
      </Head>

      <Center>
        <Text textAlign="center" fontWeight="bold" fontSize="3rem" mb="1rem">
          Technologies and Languages
        </Text>
      </Center>

      <Show breakpoint="(max-width: 871px)">
        {Object.keys(TechnologiesAndLanguages).map((key, index) => (
          <Accordion rounded="xl" key={index} defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontWeight="700" as="span" flex="1" textAlign="left">
                    {key}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack spacing="1rem" justifyContent="left" alignItems="left">
                  {Object.keys(TechnologiesAndLanguages[key]).map((item, index) => (
                    <HStack key={index}>
                      <HStack>
                        <Image
                          width="2rem"
                          height="2rem"
                          src={TechnologiesAndLanguages[key][item].logo}
                          alt="logo"
                        />
                        <Text fontWeight="500">{item}</Text>
                      </HStack>

                      {item === 'JavaScript' && (
                        <HStack>
                          <Text fontWeight="600">+</Text>
                          <Image
                            width="2rem"
                            height="2rem"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                            alt="logo"
                          />
                          <Text>TypeScript</Text>
                        </HStack>
                      )}
                    </HStack>
                  ))}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}

      </Show>

      <Hide breakpoint="(max-width: 871px)">
        <Center alignItems="top">
          {Object.keys(TechnologiesAndLanguages).map((key, index) => (
            <Accordion width="25rem" rounded="xl" key={index} defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box fontWeight="700" as="span" flex="1" textAlign="left">
                      {key}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <VStack spacing="1rem" justifyContent="left" alignItems="left" height="8rem">
                    {Object.keys(TechnologiesAndLanguages[key]).map((item, index) => (
                      <HStack key={index}>
                        <HStack>
                          <Image
                            width="2rem"
                            height="2rem"
                            src={TechnologiesAndLanguages[key][item].logo}
                            alt="logo"
                          />
                          <Text fontWeight="500">{item}</Text>
                        </HStack>

                        {item === 'JavaScript' && (
                          <HStack>
                            <Text fontWeight="600">+</Text>
                            <Image
                              width="2rem"
                              height="2rem"
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                              alt="logo"
                            />
                            <Text>TypeScript</Text>
                          </HStack>
                        )}
                      </HStack>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Center>
      </Hide>
    </>
  )
}

export default TechnologiesAndLanguagesComponent
