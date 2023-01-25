import { Image } from "@chakra-ui/react"
import { getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import app from '../lib/firebase'

const auth = getAuth()

const UserProfileBlog = () => {
  const [user, authenticated] = useAuthState(auth)
  const [photoURL, setPhotoURL] = useState(undefined)

  useEffect(() => {
    if (user) {
      auth.onAuthStateChanged(user => {
        setPhotoURL(user.photoURL)
      })
    }
  })
  
  if (user) {
    return (
      <Image src={photoURL} boxSize="2.5rem" rounded="xl" draggable={false} />
    )
  }
}

export default UserProfileBlog
