import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { HStack, Center, VStack, Box, Icon, IconButton, useToast, Text } from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'
import { writeNumberOfLikes, retrieveNumberOfLikes } from '../lib/firebaseLikes'
import app from '../lib/firebase'
import { useEffect, useState } from 'react'

const numberOfLikesAtom = atom(0)
const auth = getAuth()

const HeartIcon = () => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" version="1.0" width="45%" height="45%" viewBox="0 0 1024.000000 943.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,943.000000) scale(0.100000,-0.100000)" fill="#ff0000" stroke="none">
        <path d="M2680 9399 c-692 -71 -1357 -395 -1842 -897 -436 -452 -707 -997 -809 -1627 -30 -188 -38 -585 -14 -785 66 -575 279 -1088 642 -1547 62 -77 709 -732 2267 -2291 l2181 -2182 2181 2182 c1571 1573 2205 2214 2268 2293 438 553 658 1182 657 1885 -1 395 -66 738 -207 1095 -151 381 -371 714 -668 1011 -469 469 -1015 743 -1696 849 -163 26 -559 31 -740 11 -372 -43 -671 -131 -1005 -296 -262 -129 -473 -273 -695 -472 l-95 -86 -60 55 c-246 222 -457 369 -716 499 -325 163 -641 256 -1014 299 -142 16 -491 18 -635 4z"/>
      </g>
    </Icon>
  )
}

export async function getServerSideProps() {
  return retrieveNumberOfLikes('thing').then(snapshot => {
    return { props: { snapshot } }
  })
}

const Blog = ({ snapshot }) => {
  const [user, authenticated] = useAuthState(auth)
  const toast = useToast()
  const [numberOfLikes, setNumberOfLikes] = useAtom(numberOfLikesAtom)

  useEffect(() => {
    setNumberOfLikes(snapshot['numberOfLikes'])
  }, [])

  useEffect(() => {
    writeNumberOfLikes('thing', numberOfLikes)
  })

  return (
    <Center mt="1%">
      <HStack>
        <IconButton icon={<HeartIcon />} size="lg" variant="ghost" rounded="full" colorScheme="purple" onClick={() => {
          if (user) {
            setNumberOfLikes(numberOfLikes + 1)
          } else {
            toast({
              title: 'You cannot vote',
              description: 'Sign in to rate the post',
              status: 'error',
              duration: 3000,
              isClosable: true
            })
          }
        }} />
        <Text fontWeight="600">{numberOfLikes}</Text>
      </HStack>
    </Center>
  )
}

export default Blog
