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
import { MoonIcon, SunIcon, HamburgerIcon, InfoIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Center mt="1rem">
      <HStack spacing={4} userSelect="none" align="center">
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
            />
          <MenuList bg={useColorModeValue('#e3e3e3', '#27272a')} shadow="lg">
            <NextLink href="/what_i_use">
              <MenuItem>
                What I use
              </MenuItem>
            </NextLink>
            <NextLink href="/what_i_use">
              <MenuItem>
                Blog
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
