import type { FC, Dispatch, SetStateAction } from 'react'
import { Heading, Image, Text, VStack, Center } from '@chakra-ui/react'
import PageNotFound from '../components/404Page'

type PostContentProps = {
  post: string;
  setPostExists: Dispatch<SetStateAction<boolean>>
}

const PostContent: FC<PostContentProps> = ({ post, setPostExists }) => {
  if (post === 'reading_stephen_king') {
    setPostExists(true)
    return (
      <VStack alignItems="left" width={{ base: '19rem', '330px': '20rem', '440px': '27rem', '540px': '32rem', '700px': '40rem' }}>
        <Center>
          <Image
            src="https://media.discordapp.net/attachments/1096933168906522666/1096933257418899506/IMG20230415015437.jpg"
            width={{ base: '17rem', '369px': '18rem', '462px': '25rem' }}
            height="auto"
            rounded="2xl"
            alt="reading_stephen_king"
          />
        </Center>
        <VStack pl="1rem" alignItems="left">
          <Heading mt="1rem">First day</Heading>
          <Text fontSize="1.2rem">
            After having always read Harry Potter reading a book for genuine grown-ups was incredibly unusual. To enjoy every positive and negative aspect of reading such books I decided to read the very introduction of the very author to roughly get which type of language I can expect. And yes, it was worth it.
          </Text>
          <Heading pt="1rem">After a few days of consuming {'"Pet Sematary"'}</Heading>
          <Text fontSize="1.2rem">
            What initially appeared to be unusual was that King used bad and explicit words unlike Rowling. In {"layman's"} terms, Rowling would say {'"radius" or "in every direction", and King would say "in every fucking direction"'}. As I kept reading the book, I realised that there were not too many bad words and a lot of action which got me restlessly focused on the book. Even when there is nothing essential happening in the book, it feels so nice to read it, and this is what proves that Stephen King is a high-class writer.
          </Text>
          <Heading pt="1rem">Now that nearly a year since I started reading the book has elapsed</Heading>
          <Text fontSize="1.2rem">
            Welp, over this long period I have many times gone back to Harry Potter, because at times {'"Pet Sematary"'} seemed to be very difficult and I thought I {"couldn't"} understand certain images and ideas Stephen King tried to make the reader think about. Initially, I supposed the book was about the dead being buried and other sombre topics, but now I believe it is about love, but I do not want to spoiler anything, so read the book and realise that as well. What I will hereafter always remember when reading books by Stephen King is that they are not about killing and running away from dead bodies, because this form merely transfers the main point which is mainly very deep.
          </Text>
        </VStack>
      </VStack>
    )
  } else if (post === 'g_pro_wireless') {
    setPostExists(true)
    return (
      <VStack alignItems="left" width={{ base: '19rem', '330px': '20rem', '440px': '27rem', '540px': '32rem', '700px': '40rem' }}>
        <Center>
          <Image
            src="https://res.cloudinary.com/dsliut4oh/image/upload/v1676486896/IMG20230126151627_e0nfzp.jpg"
            width={{ base: '17rem', '369px': '18rem', '462px': '25rem' }}
            height="auto"
            rounded="2xl"
            alt="g_pro_wireless_image"
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
            then the problem you may dislike is that its bottom gathers dust in spots where it is not too easy to purge it out of. But that {"doesn't"} change anything in the computer experience,
            so there are no problems so far at all.
          </Text>
        </VStack>
      </VStack>
    )
  } else if (post === 'my_setup') {
    setPostExists(true)
    return (
      <VStack alignItems="left" width={{ base: '19rem', '330px': '20rem', '440px': '27rem', '540px': '32rem', '700px': '40rem' }}>
        <Center>
          <Image
            src="https://ik.imagekit.io/gjvyoautg/geometrized_image.png?updatedAt=1687465406213"
            width={{ base: '17rem', '369px': '18rem', '462px': '25rem' }}
            height="auto"
            rounded="2xl"
            alt="geometrized-setup"
          />
        </Center>
        <VStack pl="1rem" alignItems="left">
          <Heading mt="1rem">How {"it's"} all begun</Heading>
          <Text fontSize="1.2rem">
            It all began in 2020 when we all had to stay home, so I did obviously need to make the experience of spending
            a ton of time in front of the monitor get my health worse as little as possible, so I little by little started upgrading my setup
            by at first getting a better camera, then getting an even better phone stand, then getting a larger monitor, a wireless mouse and a more comfortable keyboard, by placing a big red lamp in front of me 
            and eventually in 3 years by finishing the upgrade when I got a better GPU.
          </Text>
          <Heading pt="1rem">Which recommendations I would give and would you should give a care about my opinion</Heading>
          <Text fontSize="1.2rem">
            I had always strived for much better performace when I {"hadn't"} yet got all the good stuff for my computer by 
            trying different operating systems, modifying the registry, a ton of different advanced stuff casual users are usually 
            simply afraid of, and my recommendations are going to help you a lot if you do not want to suffer just like I did.

            <br />
            <br />

            Well, first of all, remember that if your upgrade is supposed to resolve a performance issue, then changing something within 
            the OS will never help you by more than about 10%. Getting rid of telemetry and worrying about every single value in the configuration is 
            completely unnecessary, so do not even hope to make your computer very snappy by changing something within the OS; instead, modify the hardware of the PC, that is literally
            the only fix.

            <br />
            <br />

            If the goal of your upgrade is to make everything look gorgeous, then make sure you {"don't"} just go to the nearest market where you can find what you need and get it, but 
            meticulously ask yourself what exactly you need, what the colour has to be, which shape it has to have. Image you have already got the device and are already using it and think what can be improved 
            and what you might be unhappy with.
            I know this tip might seem very obvious and banal, but people very often choose their dream device and then realise it is not good at all, so make sure you end up with this device being in your dream in which you are using it.
          </Text>
          <Heading pt="1rem">Always buy gaming devices</Heading>
          <Text fontSize="1.2rem">
            Yes, you read it right. Always buy gaming devices even if you are not a gamer, because gaming companies definitely know how to make the experience of using a computer as pleasant as possible.
            It very often happens so that you get bored or tired of using a specific device not quite realising it, and {'"from gamers to gamers"'} companies just know how to make sure you are enjoying the process.
            All of my devices are for gaming, they are all very comfortable even though I do not spend entire days on gaming.
          </Text>
          <Heading pt="1rem">Conclusion</Heading>
          <Text fontSize="1.2rem">
            Make sure you enjoy the devices and never buy anything just because everyone uses it. Do a deep research, make sure the brand is not completely unknown and ask many different people which devices they use.
          </Text>
        </VStack>
      </VStack>
    )
  } else {
    setPostExists(false)
    return <PageNotFound />
  }
}

export default PostContent
