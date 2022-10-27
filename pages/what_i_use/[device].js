import { useRouter } from 'next/router'
import Head from 'next/head'
import Paths from '../../lib/device_posts.json'
import { Text, VStack, Image } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import PageNotFound from '../../components/404Page'
import '@fontsource/quicksand/500.css'
import '@fontsource/quicksand/600.css'

const DevicePage = () => {
  const router = useRouter()
  
  if (!router.isReady) {
    return
  }

  const { device } = router.query
  
  if (!Object.keys(Paths).includes(device)) {
    return <PageNotFound />
  }

  return (
    <>
      <Head>
        <title>Cyril Tasman</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <VStack display="flex" justifyContent="center" alignItems="center" mt="5rem">
        <Image 
          src={Paths[device][1]} 
          alt="device"
          width="18rem"
          height="auto"
          loading="eager"
          style={{borderRadius: "5%", userSelect: "none"}}
        />
        <Text textAlign="center" fontSize="2.5rem" fontWeight="600">{Paths[device][0]}</Text>
        <Text textAlign="center" fontSize="1.5rem" fontWeight="500">{Paths[device][3]}</Text>
        <Text textAlign="center" fontSize="1.5rem" pt="2%" maxW="50rem" px="1rem" fontWeight="500">{Paths[device][2]}</Text>
      </VStack>
    </>
  )
}

export default DevicePage
