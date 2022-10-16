import { useRouter } from 'next/router'
import Image from 'next/image'
import Paths from '../../lib/device_posts.json'
import { VStack, Text } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import '@fontsource/quicksand/600.css'

const DevicePage = () => {
  const router = useRouter()
  const { device } = router.query
  
  if (!router.isReady) {
    return
  }

  return (
    <>
      <Navbar />
      <VStack display="flex" justifyContent="center" alignItems="center" mt="5rem">
        <Image 
          src={Paths[device][1]} 
          alt="mouse"
          width="270%"
          height="190%"
          draggable={false}
          loading="eager"
          quality="100"
          priority
          style={{borderRadius: "5%", userSelect: "none"}}
          />
        <Text textAlign="center" fontSize="2.5rem">{Paths[device][0]}</Text>
        <Text textAlign="center" fontSize="1.8rem" pt="2%" maxW="50rem" px="1rem">{Paths[device][2]}</Text>
      </VStack>
    </>
  )
}

export default DevicePage
