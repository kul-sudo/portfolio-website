import NextLink from 'next/link'
import { VStack, Image, Text, useColorModeValue } from '@chakra-ui/react'

export default ({ href, photoSrc, text }) => {
  return (
    <NextLink href={href}>
      <VStack role="group" backgroundColor={useColorModeValue('#dedede', '#191919')} width={{ base: '15rem', '440px': '25rem' }} py={{ base: '0rem', '440px': '1rem' }} rounded="3xl" transition="0.3s" _hover={{ transform: 'translateY(-5px)' }}>
        <Image
          width="20rem"
          height="auto"
          src={photoSrc}
          alt="My Image"
          loading="lazy"
          rounded="1rem"
          roundedBottom={{ base: 'none', '440px': '1rem' }}
          draggable={false}
        />
        <Text textAlign="center" fontSize="1.5rem" fontWeight="700" transition="0.3s" _groupHover={{ color: '#ef6029' }}>{text}</Text>
      </VStack>
    </NextLink>
  )
}
