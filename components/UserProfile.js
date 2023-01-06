import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { VStack, Image, Text, useColorModeValue } from '@chakra-ui/react'
import app from '../lib/firebase'

const auth = getAuth()

const UserProfile = () => {
  const [user, authenticated] = useAuthState(auth)

  if (user) {
    return (
      <VStack backgroundColor={useColorModeValue('#cbcbcb', '#363636')} p="0.7rem" rounded="2xl" bottom="5" right="10" position="fixed" zIndex="2">
        <Image src={user.photoURL} boxSize="2.5rem" rounded="xl" draggable={false} />
        <Text fontWeight="600">{user.displayName}</Text>
      </VStack>
    )
  }
}

export default UserProfile
