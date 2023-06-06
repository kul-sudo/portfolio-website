import Head from 'next/head'
import { memo } from 'react'
import { Center, Image, VStack, Text } from '@chakra-ui/react'
import BlogItem from '../components/BlogItem'

export default memo(() => {
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
            loading="lazy"
            style={{ borderRadius: '1rem' }}
            draggable={false}
          />
          <Text fontSize="1.1rem">Hello. I have a blog!<br />Keep an eye on it!</Text>
        </VStack>
      </Center>

      <Center mt="2rem">
        <VStack spacing="2rem">
          <BlogItem
            href="/blog/g_pro_wireless"
            photoSrc="https://res.cloudinary.com/dsliut4oh/image/upload/v1676228023/IMG20230212214826_gx3xvj.jpg"
            text="Getting G PRO Wireless"
          />
          <BlogItem
            href="/blog/reading_stephen_king"
            photoSrc="https://media.discordapp.net/attachments/1096933168906522666/1096933257418899506/IMG20230415015437.jpg"
            text="Reading Stephen King"
          />
        </VStack>
      </Center>
    </>
  )
})
