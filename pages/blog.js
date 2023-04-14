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
                width="20rem"
                height="auto"
                src="https://res.cloudinary.com/dsliut4oh/image/upload/v1676228023/IMG20230212214826_gx3xvj.jpg"
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
                width="20rem"
                height="auto"
                src="https://previews.dropbox.com/p/thumb/AB0FyuBEZToCgDfLes2mtM6A2eh3EDvJDOVQkFe7zg3dHrFO1n7LNo2mLsBhGvgsdXqF5msgcfsYe4pTnAVabqzyS1qnWDBcdnEdF1WQe7yiIHwLVfzYeZCoVS1OhpmAcqRyK-92pMYroCy7mTFtv6Zxc2Iv20Rn4dg51gDSelUbqrSNcyHYJ0PZDSYXGXU-zk3HeitwH_5DlmHImJoa5DVUIJkrK1rZddeQL5fqy43HGA6CC3_Xza27vS8q15V4Wh7_GoDtwr2UZet-fEvhheNYV6zfFpmFteARrh5RKuw7OueF8YiTBrB3Fju_OlgwhqBbQjG-dflYYAJ1jD7CD6ScVceEq5DncG6A0nkgWbkd1AkqJpCHP05JgYRZpnapidI/p.jpeg"
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
