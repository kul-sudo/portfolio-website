import Head from 'next/head'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { HStack, Center, Image, VStack, Box, Text, Input, Button, Icon, Stack, IconButton, useToast, useColorModeValue } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'
import { writeComment, retrieveComments, deleteComment, addReply } from '../../lib/firebaseComments'
import { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import PostContent from '../../components/PostContent'
import app from '../../lib/firebase'

const commentInputAtom = atom('')

const auth = getAuth()

const Post = ({ snapshot, slug }) => {
  const [user] = useAuthState(auth)

  const [photoURL, setPhotoURL] = useState(undefined)
  useEffect(() => {
    if (user) {
      auth.onAuthStateChanged(user => {
        setPhotoURL(user.photoURL)
      })
    }
  })

  const [postExists, setPostExists] = useState(false)

  const [comment, setComment] = useAtom(commentInputAtom)
  const handleMessageChange = e => setComment(e.target.value)

  const toast = useToast()

  return (
    <>
      <Head>
        <title>Cyril Tasman - Blog</title>
        <meta name="description" content="My personal portfolio" />
      </Head>

      <Center>
        <VStack spacing="2rem">
          <PostContent post={slug} postExists={postExists} setPostExists={setPostExists} />

          {postExists && (
            <VStack>
              <Stack>
                <HStack>
                  {user ? (
                    <Image loading="lazy" src={photoURL} boxSize="2.5rem" rounded="xl" draggable={false} />
                  ) : (
                      <Box backgroundColor="#2e2e2e" rounded="xl" p="0.2rem">
                        <Icon boxSize="2.2rem" viewBox="0 0 500 500" fill="#fff">
                          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="m2436 4309 c-443 -47 -825 -369 -951 -803 -122 -423 29 -906 367 -1171 42 -33 77 -63 77 -66 1 -3 -23 -16 -51 -29 -93 -42 -230 -130 -326 -208 -261 -211 -454 -509 -538 -831 -25 -96 -54 -291 -54 -362 l0 -39 158 0 158 0 13 117 c31 303 143 550 346 762 362 379 899 499 1392 311 353 -135 634 -435 752 -804 32 -98 60 -262 61 -343 l0 -43 160 0 160 0 0 53 c0 78 -27 249 -55 355 -117 439 -439 832 -837 1020 -43 21 -77 39 -77 42 0 3 27 25 61 50 127 94 269 279 336 435 294 692 -161 1473 -906 1554 -113 12 -131 12 -246 0z m242 -319 c417 -68 705 -424 679 -840 -22 -346 -248 -625 -584 -722 -103 -30 -313 -32 -413 -5 -452 125 -702 589 -555 1034 119 360 501 593 873 533z"/>
                          </g>
                        </Icon>
                      </Box>
                    )}
                  <Input placeholder="Type in English only" backgroundColor={useColorModeValue('#e3e3e3', '')} onChange={handleMessageChange} fontWeight="600" width={{ base: 'fit-content', '500px': '20rem' }} />
                </HStack>
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
                  }
                  if (comment === '') {
                    toast({
                      title: 'Error',
                      description: 'The comment text you have typed is empty.',
                      status: 'error',
                      duration: 9000,
                      isClosable: true
                    })
                    return
                  }
                  writeComment(slug, comment, user.displayName, user.uid, user.photoURL)
                }}>Send</Button>
              </Stack>

              {snapshot !== null && (
                <VStack pt="1rem" alignItems="end">
                  {Object.keys(snapshot).map(element => (
                    Object.keys(snapshot[element]).map(element_ => (
                      <>
                        <VStack position="relative" bgGradient="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" p="1rem" width={{ base: '15rem', '340px': '20rem', '440px': '25rem' }} rounded="xl">
                          <HStack>
                            <Image src={snapshot[element]?.[element_].photoURL} boxSize="2.5rem" loading="lazy" rounded="xl" draggable={false} />
                            <Text fontSize="0.9rem" color="#fff">{snapshot[element]?.[element_].name}</Text>
                          </HStack>
                          <Box bgGradient="linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)" p="0.5rem" width={{ base: '10rem', '340px': '17rem', '440px': '20rem' }} rounded="xl">
                            <Text color="#fff" style={{ hyphens: 'auto' }}>{snapshot[element]?.[element_].text}</Text>
                          </Box>
                          <HStack
                            spacing="0"
                          >
                            <Input
                              placeholder="Type your reply"
                              borderTopRightRadius="none"
                              borderBottomRightRadius="none"
                              focusBorderColor="rgba(255, 255, 255, 0.24)"
                              id={`reply-input-${element_}`}
                              />
                            <Button
                              borderTopLeftRadius="none"
                              borderBottomLeftRadius="none"
                              onClick={() => {
                                addReply(element, slug, element_, document.getElementById(`reply-input-${element_}`).value, user.displayName, user.uid, user.photoURL) 
                              }}
                            >
                              Reply</Button>
                          </HStack>
                          {(user && (user.uid === element)) && (
                            <IconButton
                              position="absolute"
                              top="-0.5rem"
                              right="0"
                              icon={<DeleteIcon boxSize="1.2rem" />}
                              boxSize="2.5rem"
                              borderTopLeftRadius="none"
                              borderBottomRightRadius="none"
                              borderTopRightRadius="xl"
                              onClick={() => {
                                deleteComment(slug, element, element_)
                              }}
                            />
                          )}
                        </VStack>
                        {typeof snapshot[element][element_].replies === 'object' && (
                          Object.keys(snapshot[element][element_].replies).map(uid => (
                            Object.keys(snapshot[element][element_].replies[uid]).map(replyItem => (
                              <VStack bgGradient="linear-gradient(160deg, #0093E9 0%, #80D0C7 200%)" p="1rem" width="15rem" rounded="xl">
                                <HStack>
                                  <Image src={snapshot[element][element_].replies[uid][replyItem].photoURL} boxSize="2.5rem" loading="lazy" rounded="xl" draggable={false} />
                                  <Text fontSize="0.9rem" color="#fff">{snapshot[element][element_].replies[uid][replyItem].name}</Text>
                                </HStack>
                                <Box bgGradient="linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)" p="0.5rem" width="8rem" rounded="xl">
                                  <Text color="#fff" style={{ hyphens: 'auto' }}>{snapshot[element][element_].replies[uid][replyItem].text}</Text>
                                </Box>
                              </VStack>
                            ))
                          ))
                        )}
                      </>
                    ))
                  ))}
                </VStack>
              )}

              {snapshot === null && (
                <VStack>
                  <Text>¯\_(ツ)_/¯</Text>
                  <Text>No comments yet</Text>
                </VStack>
              )}
            </VStack>
          )}
        </VStack>
      </Center>
    </>
  )
}

export async function getServerSideProps(context) {
  const slug = context.query.postname
  const snapshot = await retrieveComments(slug).then(snapshot => {
    return snapshot
  })


  return {
    props: {
      snapshot,
      slug
    }
  }
}

export default Post
