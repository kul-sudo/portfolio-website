import NextLink from 'next/link'
import {
  Text,
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
import app from '../lib/firebase'

const auth = getAuth()
const provider = new GoogleAuthProvider()

const createFirebaseUser = async () => {
  await signInWithPopup(auth, provider)
}

const NewMenuItem = props => {
  return <MenuItem {...props} fontWeight="600" backgroundColor={useColorModeValue('#e3e3e3', '#27272a')} _hover={{ backgroundColor: useColorModeValue('#f1f1f1', '#343437') }}>{props.children}</MenuItem>
}

const LanguageToggleIcon = () => {
  const language = useLanguage(state => state.language)
  if (language === 'english') {
    return <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="auto" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#eee" d="m0 0 8 22-8 23v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0l-22 8-23-8h-23l-54 32-54-32h-32l-48 32-48-32h-32l-54 32L68 0H0z"/><path fill="#0052b4" d="M336 0v108L444 0Zm176 68L404 176h108zM0 176h108L0 68ZM68 0l108 108V0Zm108 512V404L68 512ZM0 444l108-108H0Zm512-108H404l108 108Zm-68 176L336 404v108z"/><path fill="#d80027" d="M0 0v45l131 131h45L0 0zm208 0v208H0v96h208v208h96V304h208v-96H304V0h-96zm259 0L336 131v45L512 0h-45zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"/></g></svg>
  } else if (language === 'spanish') {
    return <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="auto" viewBox="0 0 512 512"><mask id="a"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#a)"><path fill="#ffda44" d="m0 128 256-32 256 32v256l-256 32L0 384Z"/><path fill="#d80027" d="M0 0h512v128H0zm0 384h512v128H0z"/><g fill="#eee"><path d="M144 304h-16v-80h16zm128 0h16v-80h-16z"/><ellipse cx="208" cy="296" rx="48" ry="32"/></g><g fill="#d80027"><rect width="16" height="24" x="128" y="192" rx="8"/><rect width="16" height="24" x="272" y="192" rx="8"/><path d="M208 272v24a24 24 0 0 0 24 24 24 24 0 0 0 24-24v-24h-24z"/></g><rect width="32" height="16" x="120" y="208" fill="#ff9811" ry="8"/><rect width="32" height="16" x="264" y="208" fill="#ff9811" ry="8"/><rect width="32" height="16" x="120" y="304" fill="#ff9811" rx="8"/><rect width="32" height="16" x="264" y="304" fill="#ff9811" rx="8"/><path fill="#ff9811" d="M160 272v24c0 8 4 14 9 19l5-6 5 10a21 21 0 0 0 10 0l5-10 5 6c6-5 9-11 9-19v-24h-9l-5 8-5-8h-10l-5 8-5-8z"/><path d="M122 252h172m-172 24h28m116 0h28"/><path fill="#d80027" d="M122 248a4 4 0 0 0-4 4 4 4 0 0 0 4 4h172a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 24a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm144 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4z"/><path fill="#eee" d="M196 168c-7 0-13 5-15 11l-5-1c-9 0-16 7-16 16s7 16 16 16c7 0 13-4 15-11a16 16 0 0 0 17-4 16 16 0 0 0 17 4 16 16 0 1 0 10-20 16 16 0 0 0-27-5c-3-4-7-6-12-6zm0 8c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-8 0-4 4-8 8-8zm24 0c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-8 0-4 4-8 8-8zm-44 10 4 1 4 8c0 4-4 7-8 7s-8-3-8-8c0-4 4-8 8-8zm64 0c5 0 8 4 8 8 0 5-3 8-8 8-4 0-8-3-8-7l4-8z"/><path fill="none" d="M220 284v12c0 7 5 12 12 12s12-5 12-12v-12z"/><path fill="#ff9811" d="M200 160h16v32h-16z"/><path fill="#eee" d="M208 224h48v48h-48z"/><path fill="#d80027" d="m248 208-8 8h-64l-8-8c0-13 18-24 40-24s40 11 40 24zm-88 16h48v48h-48z"/><rect width="20" height="32" x="222" y="232" fill="#d80027" rx="10" ry="10"/><path fill="#ff9811" d="M168 232v8h8v16h-8v8h32v-8h-8v-16h8v-8zm8-16h64v8h-64z"/><g fill="#ffda44"><circle cx="186" cy="202" r="6"/><circle cx="208" cy="202" r="6"/><circle cx="230" cy="202" r="6"/></g><path fill="#d80027" d="M169 272v43a24 24 0 0 0 10 4v-47h-10zm20 0v47a24 24 0 0 0 10-4v-43h-10z"/><g fill="#338af3"><circle cx="208" cy="272" r="16"/><rect width="32" height="16" x="264" y="320" ry="8"/><rect width="32" height="16" x="120" y="320" ry="8"/></g></g></svg> 
  }
}

export default () => {
  const { toggleColorMode } = useColorMode()

  const [user] = useAuthState(auth)

  return (
    <>
      <Center top="0" position="sticky" py="1rem" backdropFilter="auto" backdropBlur="12px" backgroundColor={useColorModeValue('hsla(0, 15%, 7%, 0.1)', 'hsla(0, 0%, 7%, 0.2)')} width="100%" zIndex="1" borderBottomColor={useColorModeValue('blackAlpha.400', 'whiteAlpha')} borderBottomWidth="1px">
        <HStack spacing={4} userSelect="none" fontWeight="600"> 
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              backgroundColor={useColorModeValue('#dedede', )}
              _hover={{ backgroundColor: useColorModeValue('#d1d1d1', ) }}
            />
            <MenuList backgroundColor={useColorModeValue('#e3e3e3', '#27272a')} shadow="lg" w="5rem">
              <NextLink href="/">
                <NewMenuItem>
                  Home
                </NewMenuItem>
              </NextLink>
              <NextLink href="/my_projects">
                <NewMenuItem>
                  My projects
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

          <IconButton colorScheme={useColorModeValue('teal', 'purple')} onClick={toggleColorMode} icon={useColorModeValue(<MoonIcon />, <SunIcon />)} />

          <Menu>
            <MenuButton>
              {user ? (
                <Image loading="lazy" src={user.photoURL} boxSize="2.2rem" rounded="full" draggable={false} />
              ) : (
                  <Box rounded="full">
                    <Icon boxSize="2.2rem" viewBox="0 0 500 500" fill={useColorModeValue('black', 'white')}>
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
