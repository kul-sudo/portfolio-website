import Head from 'next/head'
import { HStack, Center, Image, VStack, Box, Text, Input, Button, Icon, useToast, useColorModeValue } from '@chakra-ui/react'
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
          <Text>Hello. I have a blog!<br />Keep an eye on it!</Text>
        </VStack>
      </Center>

      <Center mt="1.5%">
        <NextLink href="/blog/g_pro_wireless">
          <VStack role="group" mt="1%" backgroundColor="#151515" width="25rem" py="1rem" rounded="3xl" transition="0.3s" _hover={{ transform: 'translateY(-5px)' }}>
            <Image
              width="20rem"
              height="auto"
              src="https://res.cloudinary.com/dsliut4oh/image/upload/v1676228023/IMG20230212214826_gx3xvj.jpg"
              alt="My Image"
              style={{ borderRadius: '1rem' }}
              draggable={false}
            />
            <Text fontSize="1.5rem" color="#e1e1e1" fontWeight="700" transition="0.3s" _groupHover={{ color: '#ef6029' }}>Getting G PRO Wireless</Text>
          </VStack>
        </NextLink>
      </Center>
    </>
  )
}

export default Blog
