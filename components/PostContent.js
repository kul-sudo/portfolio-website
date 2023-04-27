import { Heading, Image, Text, VStack, Center, Spinner } from '@chakra-ui/react'
import { useState } from 'react'

const PostContent = ({ post }) => {
  const [loaded, setLoaded] = useState(false)

  if (post === 'reading_stephen_king') {
    return (
      <VStack alignItems="left" width={{ base: '19rem', '330px': '20rem', '440px': '27rem', '540px': '32rem', '700px': '40rem' }}>
        <Center position="relative">
          {!loaded && (
            <Center position="absolute">
              <Spinner boxSize={50} />
            </Center>
          )}

          <Image
            src="https://media.discordapp.net/attachments/1096933168906522666/1096933257418899506/IMG20230415015437.jpg"
            width="60%"
            height="auto"
            rounded="2xl"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </Center>
        <VStack pl="1rem" alignItems="left">
          <Heading mt="1rem">First day</Heading>
          <Text fontSize="1.2rem">
            After having always read Harry Potter reading a book for genuine grown-ups was incredibly unusual. To enjoy every positive and negative aspect of reading such books I decided to read the very introduction of the very author to roughly get which type of language I can expect. And yes, it was worth it.
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
  } else if (post === 'g_pro_wireless') {
    return (
      <VStack alignItems="left" width={{ base: '19rem', '330px': '20rem', '440px': '27rem', '540px': '32rem', '700px': '40rem' }}>
        <Center position="relative">
          {!loaded && (
            <Center position="absolute">
              <Spinner boxSize={50} />
            </Center>
          )}

          <Image
            src="https://res.cloudinary.com/dsliut4oh/image/upload/v1676486896/IMG20230126151627_e0nfzp.jpg"
            width="60%"
            height="auto"
            rounded="2xl"
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </Center>
        <VStack pl="1rem" alignItems="left">
          <Heading mt="1rem">First emotions</Heading>
          <Text fontSize="1.2rem">I had wished to get this mouse for a while before I finally got it. What were my emotions? Well, they were incredible.
            The mouse was so clean and shiny out of the box, then it was able to connect to the computer and start working perfectly at the first attempt,
            so I was rather over-excited. It happened to be over 2 times lighter than my previous mouse (the previous one was over a hundred grams), more responsive and very snappy.
            When I installed the software, I immediately changed all the basic options. The software is glorious, by the way. Since then I have purged it very often and took care of it,
            because I really cherish it.
          </Text>
          <Heading pt="1rem">First cons I encountered</Heading>
          <Text fontSize="1.2rem">Well, there are no very essential cons; however, if you really concentrate on the sound, the mouse may appear quite loud to you. Also, you should buy a mousepad for it,
            for it is tremendously sensitive, so every little pit in your table can change its movement. Remember that these little movement flaws caused by the little pits will not really matter unless you play
            shooting games or need to be accurate with your hand.
          </Text>
          <Heading pt="1rem">Now that I have used it for quite a long time</Heading>
          <Text fontSize="1.2rem">If you just want to use it and enjoy your computer experience, then I can tell you that this mouse is flawless, but if you are obsessed with computer mice,
            then the problem you may dislike is that its bottom gathers dust in spots where it is not too easy to purge it out of. But that doesn't change anything in the computer experience,
            so there are no problems so far at all.
          </Text>
        </VStack>
      </VStack>
    )
  }
}

export default PostContent
