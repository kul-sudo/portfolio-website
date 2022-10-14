import { useRouter } from 'next/router'
import Image from 'next/image'
import { Stack, Text } from '@chakra-ui/react'
import Navbar from '../../components/Navbar'
import '@fontsource/quicksand/600.css'

const DevicePage = () => {
  const { device } = useRouter().query
  const paths = {
    'bloody-a70': ['Bloody A70', 'https://res.cloudinary.com/dsliut4oh/image/upload/v1665316757/DSC00063_lpixuq.jpg'],
    'thunderx3-tc3bk': ['ThunderX3 TC3BK', 'https://res.cloudinary.com/dsliut4oh/image/upload/v1665316764/DSC00073_iwnxdb.jpg'],
    'razer-cynosa-lite': ['Razer Cynosa Lite', 'https://res.cloudinary.com/dsliut4oh/image/upload/v1665316756/DSC00066_mdlw8e.jpg'],
    'sennheiser-hd-206': ['Sennheiser HD 206', 'https://res.cloudinary.com/dsliut4oh/image/upload/v1665316757/DSC00089_ayxnxv.jpg'],
    'aoc-i2475pxqu': ['AOC i2475Pxqu', 'https://res.cloudinary.com/dsliut4oh/image/upload/v1665319733/DSC00075_ygqgow_wlspi8.jpg'],
    'marantz-pro': ['Marantz Pro', 'https://res.cloudinary.com/dsliut4oh/image/upload/v1665316756/DSC00093_bufdoq.jpg']
  }
  
  return (
    <>
      <Navbar />
      <Stack display="flex" justifyContent="center" alignItems="center" mt="5rem">
        <Image 
          src={paths[device][1]} 
          alt="mouse"
          width="270%"
          height="190%"
          draggable={false}
          loading="eager"
          quality="100"
          style={{borderRadius: "5%", userSelect: "none"}}
          />
        <Text fontSize="3rem">{paths[device][0]}</Text>
      </Stack>
    </>
  )
}

export default DevicePage
