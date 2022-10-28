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
  useColorMode,
  useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Center top="0" position="fixed" py="0.5rem" backdropFilter="auto" backdropBlur="12px" width="100%" zIndex="1">
      <HStack spacing={4} userSelect="none" py="0.5rem" fontWeight="600"> 
        <NextLink href="/" passHref>
          <Link href="/" textDecoration="none">Home</Link>
        </NextLink>
        <Link href="https://github.com/kul-sudo" isExternal textDecoration="none">GitHub</Link>
        <Menu>
          <MenuButton
            colorScheme={useColorModeValue('gray.200', 'gray')}
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            _active={{borderColor: "#ffffff", borderWidth: "2px", outlineColor: "#6366f1", outlineWidth: "2px", outlineOffset: "1px"}}
          />
          <MenuList bg={useColorModeValue('#e3e3e3', '#27272a')} shadow="lg">
            <NextLink href="/">
              <MenuItem fontWeight="600">
                Home page
              </MenuItem>
            </NextLink>
            <NextLink href="/what_i_use">
              <MenuItem fontWeight="600">
                What I use
              </MenuItem>
            </NextLink>
          </MenuList>
        </Menu>
        <IconButton colorScheme={useColorModeValue('purple', 'blue')} onClick={toggleColorMode} icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)} />
      </HStack>
    </Center>
  )
}

export default Navbar
