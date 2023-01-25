import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { HStack, Center, Image, VStack, Box, Text, Input, Button, useToast, useColorModeValue } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'
import { writeComment, retrieveComments } from '../lib/firebaseComments'
import UserProfileBlog from '../components/UserProfileBlog'
import app from '../lib/firebase'

const commentInputAtom = atom('')

const auth = getAuth()

export async function getServerSideProps() {
  return retrieveComments('thing').then(snapshot => {
    return { props: { snapshot } }
  })
}

const Blog = ({ snapshot }) => {
  const [user, authenticated] = useAuthState(auth)

  const [comment, setComment] = useAtom(commentInputAtom)
  const handleMessageChange = e => setComment(e.target.value)

  const toast = useToast()

  return (
    <>
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
          <Text>Hello. I have a blog!<br />Keep and eye on it!</Text>
        </VStack>
      </Center>
      <Center mt="2%">
        <VStack>
          {user && (
            <HStack>
              <UserProfileBlog />
              <Input placeholder="Something meaningful :)" backgroundColor={useColorModeValue('#e3e3e3', '')} onChange={handleMessageChange} fontWeight="600" />
              <Button variant="outline" backgroundColor={useColorModeValue('#e3e3e3', '')} onClick={async () => {
                if (comment.length > 95) {
                  toast({
                    title: 'Error',
                    description: 'Your comment must not consist of more than 95 characters.',
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
                }
                writeComment('thing', comment, user.displayName, user.photoURL)
              }}>Send</Button>
            </HStack>
          )}
          {snapshot !== null && (
            <VStack spacing="2rem" pt="1rem">
              {Object.keys(snapshot).map(element => {
                return (
                  Object.keys(snapshot[element]?.comments).map(element_ => {
                    return (
                      <VStack backgroundColor="#232323" position="relative" width="30rem" height="10rem" rounded="xl">
                        <HStack zIndex="999" position="absolute" top="2" left="2">
                          <Image src={snapshot[element]?.comments[element_].photoURL} boxSize="2.5rem" rounded="xl" draggable={false} />
                          <Text fontSize="0.9rem">{element}</Text>
                        </HStack>
                        <Box position="absolute" top="20%" backgroundColor="#202020" p="0.5rem" w="20rem" rounded="xl">
                          <Text w="70%">{snapshot[element]?.comments[element_].text}</Text>
                        </Box>
                      </VStack>
                    )
                  })
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
