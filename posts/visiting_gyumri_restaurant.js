import { Heading, Image, Text, VStack, Center } from "@chakra-ui/react"

const Post = () => {
  return (
    <VStack alignItems="left" width={{ base: '19rem', '330px': '20rem', '440px': '27rem', '540px': '32rem', '700px': '40rem' }}>
      <Center>
        <Image
          src="https://res.cloudinary.com/dsliut4oh/image/upload/v1676486896/IMG20230126151627_e0nfzp.jpg"
          width="60%"
          height="auto"
          rounded="2xl"
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

export default Post
