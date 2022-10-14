import { useRouter } from 'next/router'
import Image from 'next/image'
import Paths from '../../lib/device_posts.json'
import { Stack, Text } from '@chakra-ui/react'
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
      <Stack display="flex" justifyContent="center" alignItems="center" mt="5rem">
        <Image 
          src={Paths[device][1]} 
          alt="mouse"
          width="270%"
          height="190%"
          draggable={false}
          loading="eager"
          quality="100"
          style={{borderRadius: "5%", userSelect: "none"}}
          />
        <Text fontSize="3rem">{Paths[device][0]}</Text>
      </Stack>
    </>
  )
}

export default DevicePage
