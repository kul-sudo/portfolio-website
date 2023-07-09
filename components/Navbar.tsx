import type { FC } from 'react'
import NextLink from 'next/link'
import {
  HStack,
  Link,
  Center,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Image,
  Icon,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import 'firebase/auth'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import '../lib/firebase'

type NewMenuItemProps = {
  [x: string]: any
}

const auth = getAuth()
const provider = new GoogleAuthProvider()

const createFirebaseUser = async () => {
  await signInWithPopup(auth, provider)
}

const NewMenuItem: FC<NewMenuItemProps> = props => {
  return <MenuItem {...props} fontWeight="600" backgroundColor={useColorModeValue('#e3e3e3', '#27272a')} _hover={{ backgroundColor: useColorModeValue('#f1f1f1', '#343437') }}>{props.children}</MenuItem>
}

const Navbar: FC = () => {
  const { toggleColorMode } = useColorMode()

  const [user] = useAuthState(auth)
  const fill = useColorModeValue('black', 'white')

  return (
    <>
      <Center top="0" position="sticky" py="1rem" backdropFilter="auto" backdropBlur="12px" width="100%" zIndex="1" borderBottomColor={useColorModeValue('blackAlpha.400', 'whiteAlpha')} borderBottomWidth="1px">
        <HStack spacing={4} userSelect="none" fontWeight="600"> 
          <Menu>
            <MenuButton
              variant="outline"
              as={IconButton}
              icon={<HamburgerIcon />}
              _active={{ borderColor: "#ffffff", borderWidth: "2px", outlineColor: "#6366f1", outlineWidth: "2px", outlineOffset: "1px" }}
            />
            <MenuList backgroundColor={useColorModeValue('#e3e3e3', '#27272a')} shadow="lg" w="5rem">
              <NextLink href="/">
                <NewMenuItem>
                  Home
                </NewMenuItem>
              </NextLink>
              <NextLink href="/playbook">
                <NewMenuItem>
                  Playbook
                </NewMenuItem>
              </NextLink>
              <Link style={{ textDecoration: 'none' }} isExternal href="https://github.com/kul-sudo">
                <NewMenuItem>
                  GitHub
                </NewMenuItem>
              </Link>
              <NextLink href="/blog">
                <NewMenuItem>
                  Blog
                </NewMenuItem>
              </NextLink>
            </MenuList>
          </Menu>

          <IconButton colorScheme={useColorModeValue('teal', 'purple')} onClick={toggleColorMode} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} aria-label="change-color-mode" />

          <Menu>
            <MenuButton>
              {user ? (
                <Image loading="lazy" src={user.photoURL} boxSize="2.2rem" rounded="full" draggable={false} alt="user-pfp" />
              ) : (
                  <Box rounded="full">
                    <Icon boxSize="2.2rem" viewBox="0 0 500 500" fill={fill}>
                      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="m2436 4309 c-443 -47 -825 -369 -951 -803 -122 -423 29 -906 367 -1171 42 -33 77 -63 77 -66 1 -3 -23 -16 -51 -29 -93 -42 -230 -130 -326 -208 -261 -211 -454 -509 -538 -831 -25 -96 -54 -291 -54 -362 l0 -39 158 0 158 0 13 117 c31 303 143 550 346 762 362 379 899 499 1392 311 353 -135 634 -435 752 -804 32 -98 60 -262 61 -343 l0 -43 160 0 160 0 0 53 c0 78 -27 249 -55 355 -117 439 -439 832 -837 1020 -43 21 -77 39 -77 42 0 3 27 25 61 50 127 94 269 279 336 435 294 692 -161 1473 -906 1554 -113 12 -131 12 -246 0z m242 -319 c417 -68 705 -424 679 -840 -22 -346 -248 -625 -584 -722 -103 -30 -313 -32 -413 -5 -452 125 -702 589 -555 1034 119 360 501 593 873 533z"/>
                      </g>
                    </Icon>
                  </Box>
                )}
            </MenuButton>
            <MenuList backgroundColor={useColorModeValue('#e3e3e3', '#27272a')}>
              <NewMenuItem isDisabled={!user} variant="outline" colorScheme={useColorModeValue('gray.200', 'gray')} onClick={() => {
                auth.signOut()
              }}>Log out</NewMenuItem>
              <NewMenuItem isDisabled={user} variant="outline" colorScheme={useColorModeValue('gray.200', 'gray')} onClick={() => {
                createFirebaseUser()
              }}>Log in</NewMenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Center>
    </>
  )
}

export default Navbar
