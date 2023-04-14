import { Heading, Image, Text, VStack, Center } from "@chakra-ui/react"

const Post = () => {
  return (
    <VStack alignItems="left" width={{ base: '19rem', '330px': '20rem', '440px': '27rem', '540px': '32rem', '700px': '40rem' }}>
      <Center>
        <Image
          src="https://previews.dropbox.com/p/thumb/AB0FyuBEZToCgDfLes2mtM6A2eh3EDvJDOVQkFe7zg3dHrFO1n7LNo2mLsBhGvgsdXqF5msgcfsYe4pTnAVabqzyS1qnWDBcdnEdF1WQe7yiIHwLVfzYeZCoVS1OhpmAcqRyK-92pMYroCy7mTFtv6Zxc2Iv20Rn4dg51gDSelUbqrSNcyHYJ0PZDSYXGXU-zk3HeitwH_5DlmHImJoa5DVUIJkrK1rZddeQL5fqy43HGA6CC3_Xza27vS8q15V4Wh7_GoDtwr2UZet-fEvhheNYV6zfFpmFteARrh5RKuw7OueF8YiTBrB3Fju_OlgwhqBbQjG-dflYYAJ1jD7CD6ScVceEq5DncG6A0nkgWbkd1AkqJpCHP05JgYRZpnapidI/p.jpeg"
          width="60%"
          height="auto"
          rounded="2xl"
        />
      </Center>
      <VStack pl="1rem" alignItems="left">
        <Heading mt="1rem">First day</Heading>
        <Text fontSize="1.2rem">
          After having always read Harry Potter reading a book for genuine grown-ups was incredibly unusual. To enjoy every positive and negative aspect of read such books I decided to read the very introduction of the very author to roughly get which type of language I can expect. And yes, it was worth it.
        </Text>
        <Heading pt="1rem">After a few days of consuming "Pet Sematary"</Heading>
        <Text fontSize="1.2rem">
          What initially appeared to be unusual was that King used bad and explicit words unlike Rowling. In layman's terms, Rowling would say "radius" or "in every direction", and King would say "in every fucking direction". As I kept reading the book, I realised that there were not too many bad words and a lot of action which got me restlessly focused on the book. Even when there is nothing essential happening in the book, it feels so nice to read it, and this is what proves that Stephen King is a high-class writer.
        </Text>
        <Heading pt="1rem">Now that nearly a year since I started reading the book has elapsed</Heading>
        <Text fontSize="1.2rem">
          Welp, over this long period I have many times gone back to Harry Potter, because at times "Pet Sematary" seemed to be very difficult and I thought I couldn't understand certain images and ideas Stephen King tried to make the reader think about. Initially, I supposed the book was about the dead being buried and other sombre topics, but now I believe it is about love, but I do not want to spoiler anything, so read the book and realise that as well. What I will hereafter always remember when reading books by Stephen King is that they are not about killing and running away from dead bodies, because this form merely transfers the main point which is mainly very deep.
        </Text>
      </VStack>
    </VStack>
  )
}

export default Post
