import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { VStack, Image, Text, useColorModeValue } from '@chakra-ui/react'
import app from '../lib/firebase'

const auth = getAuth()

const UserProfile = () => {
  const [user, authenticated] = useAuthState(auth)

  if (user) {
    return (
      <VStack bgGradient="radial-gradient(at 87% 44%, hsla(223,70%,78%,1) 0px, transparent 50%), radial-gradient(at 76% 71%, hsla(260,97%,61%,1) 0px, transparent 50%), radial-gradient(at 90% 10%, hsla(338,78%,60%,1) 0px, transparent 50%), radial-gradient(at 32% 68%, hsla(357,99%,79%,1) 0px, transparent 50%), radial-gradient(at 62% 29%, hsla(284,73%,79%,1) 0px, transparent 50%), radial-gradient(at 35% 23%, hsla(195,91%,76%,1) 0px, transparent 50%), radial-gradient(at 71% 80%, hsla(315,99%,69%,1) 0px, transparent 50%);" backdropFilter="auto" backdropBlur="12px" p="0.7rem" rounded="2xl" bottom="5" right="10" position="fixed" zIndex="2">
        <Image src={user.photoURL} boxSize="2.5rem" rounded="xl" draggable={false} />
        <Text fontWeight="600">{user.displayName}</Text>
      </VStack>
    )
  }
}

export default UserProfile
