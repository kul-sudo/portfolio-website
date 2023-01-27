import Head from 'next/head'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { HStack, Center, Image, VStack, Box, Text, Input, Button, Icon, useToast, useColorModeValue } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'
import { writeComment, retrieveComments } from '../lib/firebaseComments'
import app from '../lib/firebase'
import { useEffect, useState } from 'react'

const commentInputAtom = atom('')

const auth = getAuth()

export async function getServerSideProps() {
  return retrieveComments('thing').then(snapshot => {
    return { props: { snapshot } }
  })
}

const Blog = ({ snapshot }) => {
  const [user, authenticated] = useAuthState(auth)
  const [photoURL, setPhotoURL] = useState(undefined)

  useEffect(() => {
    if (user) {
      auth.onAuthStateChanged(user => {
        setPhotoURL(user.photoURL)
      })
    }
  })

  const [comment, setComment] = useAtom(commentInputAtom)
  const handleMessageChange = e => setComment(e.target.value)

  const toast = useToast()

  return (
    <>
      <Head>
        <title>Cyril Tasman - Blog</title>
      </Head>

      <Center>
        <VStack>
          <Image
            width="200"
            height="200"
            src="https://res.cloudinary.com/dsliut4oh/image/upload/v1674667782/vopyan_tswgo0.jpg"
            alt="My Image"
            style={{ borderRadius: '1rem' }}
            draggable={false}
          />
          <Text>Hello. I have a blog!<br />Keep an eye on it!</Text>
        </VStack>
      </Center>
      <Center mt="2%">
        <VStack>
          <HStack>
            {user ? (
              <Image src={photoURL} boxSize="2.5rem" rounded="xl" draggable={false} />
            ) : (
                <Box backgroundColor="#2e2e2e" rounded="xl" p="0.2rem">
                  <Icon boxSize="2.2rem" viewBox="0 0 500 500" fill="#fff">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                      <path d="m2436 4309 c-443 -47 -825 -369 -951 -803 -122 -423 29 -906 367 -1171 42 -33 77 -63 77 -66 1 -3 -23 -16 -51 -29 -93 -42 -230 -130 -326 -208 -261 -211 -454 -509 -538 -831 -25 -96 -54 -291 -54 -362 l0 -39 158 0 158 0 13 117 c31 303 143 550 346 762 362 379 899 499 1392 311 353 -135 634 -435 752 -804 32 -98 60 -262 61 -343 l0 -43 160 0 160 0 0 53 c0 78 -27 249 -55 355 -117 439 -439 832 -837 1020 -43 21 -77 39 -77 42 0 3 27 25 61 50 127 94 269 279 336 435 294 692 -161 1473 -906 1554 -113 12 -131 12 -246 0z m242 -319 c417 -68 705 -424 679 -840 -22 -346 -248 -625 -584 -722 -103 -30 -313 -32 -413 -5 -452 125 -702 589 -555 1034 119 360 501 593 873 533z"/>
                    </g>
                  </Icon>
                </Box>
              )}
            <Input placeholder="Type a relevant comment in English" backgroundColor={useColorModeValue('#e3e3e3', '')} onChange={handleMessageChange} fontWeight="600" w="19.5rem" />
            <Button variant="outline" backgroundColor={useColorModeValue('#e3e3e3', '')} onClick={async () => {
              if (!user) {
                toast({
                  title: 'Error',
                  description: 'You need to register in order to make comments.',
                  status: 'error',
                  duration: 3000,
                  isClosable: true
                })
                return
              } if (comment.length < 8) {
                toast({
                  title: 'Error',
                  description: 'Your comment must consist of at least 8 characters.',
                  status: 'error',
                  duration: 3000,
                  isClosable: true
                })
                return
              } if (comment.length > 95) {
                toast({
                  title: 'Error',
                  description: 'Your comment must not consist of more than 95 characters.',
                  status: 'error',
                  duration: 3000,
                  isClosable: true
                })
                return
              }
              writeComment('thing', comment, user.displayName, user.photoURL)
            }}>Send</Button>
          </HStack>
          {snapshot !== null && (
            <VStack spacing="2rem" pt="1rem">
              {Object.keys(snapshot).map(element => {
                return (
                  Object.keys(snapshot[element]?.comments).map(element_ => (
                    <VStack backgroundColor="#232323" p="1rem" width="25rem" rounded="xl">
                      <HStack>
                        <Image src={snapshot[element]?.comments[element_].photoURL} boxSize="2.5rem" rounded="xl" draggable={false} />
                        <Text fontSize="0.9rem">{element}</Text>
                      </HStack>
                      <Box backgroundColor="#202020" p="0.5rem" w="20rem" rounded="xl">
                        <Text>{snapshot[element]?.comments[element_].text}</Text>
                      </Box>
                    </VStack>
                  ))
                )
              })}
            </VStack>
          )}
        </VStack>
      </Center>
    </>
  )
}

export default Blog
