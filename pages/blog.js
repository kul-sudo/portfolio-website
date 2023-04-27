import Head from 'next/head'
import { Center, Image, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const Blog = () => {
  return (
    <>
      <Head>
        <title>Cyril Tasman - Blog</title>
      </Head>

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
          <Text fontSize="1.1rem">Hello. I have a blog!<br />Keep an eye on it!</Text>
        </VStack>
      </Center>

      <Center mt="2rem">
        <VStack spacing="2rem">
          <NextLink href="/blog/g_pro_wireless">
            <VStack role="group" backgroundColor={useColorModeValue('#252525', '#191919')} width={{ base: '15rem', '440px': '25rem' }} py={{ base: '0rem', '440px': '1rem' }} rounded="3xl" transition="0.3s" _hover={{ transform: 'translateY(-5px)' }}>
              <Image
                height="auto"
                src="https://imagecropper-kul-sudo.vercel.app/?width=320&url=https://res.cloudinary.com/dsliut4oh/image/upload/v1676228023/IMG20230212214826_gx3xvj.jpg"
                alt="My Image"
                style={{ borderRadius: '1rem' }}
                draggable={false}
                />
              <Text textAlign="center" fontSize="1.5rem" color="#e1e1e1" fontWeight="700" transition="0.3s" _groupHover={{ color: '#ef6029' }}>Getting G PRO Wireless</Text>
            </VStack>
          </NextLink>

          <NextLink href="/blog/reading_stephen_king">
            <VStack role="group" backgroundColor={useColorModeValue('#252525', '#191919')} width={{ base: '15rem', '440px': '25rem' }} py={{ base: '0rem', '440px': '1rem' }} rounded="3xl" transition="0.3s" _hover={{ transform: 'translateY(-5px)' }}>
              <Image
                height="auto"
                src="https://imagecropper-kul-sudo.vercel.app/?width=320&url=https://media.discordapp.net/attachments/1096933168906522666/1096933257418899506/IMG20230415015437.jpg"
                alt="My Image"
                style={{ borderRadius: '1rem' }}
                draggable={false}
                />
              <Text textAlign="center" fontSize="1.5rem" color="#e1e1e1" fontWeight="700" transition="0.3s" _groupHover={{ color: '#ef6029' }}>Reading Stephen King</Text>
            </VStack>
          </NextLink>
        </VStack>
      </Center>
    </>
  )
}

export default Blog
