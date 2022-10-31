import { useRouter } from 'next/router'
import Head from 'next/head'
import NextLink from 'next/link'
import Paths from '../../lib/device_posts.json'
import { Text, VStack, Box, Image, HStack, Link, Center } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import PageNotFound from '../../components/404Page'

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
        <title>{`Cyril Tasman - ${Paths[device][0]}`}</title>
        <link rel="icon" href="https://res.cloudinary.com/dsliut4oh/image/upload/v1666902603/logo_sta6iy.png" />
      </Head>
      
      <Center mt="7rem">
        <HStack textAlign="center" fontWeight="700" fontSize="1.05rem">
          <Link><NextLink href="/what_i_use">What I use</NextLink></Link>
          <ChevronRightIcon boxSize="2rem" />
          <Link><NextLink href={`/what_i_use/${device}`}>{Paths[device][0]}</NextLink></Link>
        </HStack>
      </Center>

      <VStack display="flex" justifyContent="center" alignItems="center" mt="1rem">
        <Box mx="1rem">
          <Image 
            src={Paths[device][1]} 
            alt="device"
            width="18rem"
            height="auto"
            loading="eager"
            style={{borderRadius: "5%", userSelect: "none"}}
          />
        </Box>
        <Text textAlign="center" fontSize="2.5rem" fontWeight="600">{Paths[device][0]}</Text>
        <Text textAlign="center" fontSize="1.5rem" fontWeight="500">{Paths[device][3]}</Text>
        <Text textAlign="center" fontSize="1.5rem" pt="2%" maxW="50rem" px="1rem" fontWeight="500">{Paths[device][2]}</Text>
      </VStack>
    </>
  )
}

export default DevicePage
