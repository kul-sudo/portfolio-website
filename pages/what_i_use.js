import Head from 'next/head'
import useTheme from '../lib/theme'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import Keyboard from '../public/my_keyboard.png'
import Chair from '../public/my_chair.png'

const WhatIUse = () => {
  const toggleDarkMode = useTheme((state) => state.toggleMode)
  const dark = useTheme((state) => state.dark)
  const [moonShow, setMoonShow] = useState(false)

  useEffect(() => {
    if (dark) {
      document.querySelector('html').classList.add('bright')
      document.getElementById('navbar').style.color = 'black'
      setMoonShow(true)
    } else {
      document.querySelector('html').classList.remove('bright')
      document.getElementById('navbar').style.color = 'white'
      setMoonShow(false)
    }
  }, [dark])

  return (
    <div className="font-[600]">
      <Head>
        <title>Tasman&apos;s portfolio</title>
        <meta name="description" content="My personal cool-looking portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      
      <div className="flex justify-center select-none left-[50%] top-0 pt-4 pb-2 w-[100%] translate-x-[-50%] backdrop-blur-[0.625rem] fixed z-[1] 830px:block font-[600]" id="navbar">
        <div className="flex justify-center space-x-2">
          <Link href="/what_i_use"><span className="font-quicksand cursor-pointer">What I use</span></Link>
          <Link href="/"><span className="font-quicksand cursor-pointer">Home</span></Link>
          <Link href="/blog"><span className="font-quicksand cursor-pointer">Blog</span></Link>
          <a className="font-quicksand" href="https://github.com/kul-sudo" id="github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="flex justify-center before-830px:ml-3 mt-[0.05rem] 830px:mt-[0.2rem]">
          {(moonShow === false) &&
            (
              <IconButton onClick={toggleDarkMode} icon={<SunIcon/>} style={{width: '20px', height: '20px', color: 'white'}}/>
            )
          }

          {moonShow && 
            (
              <IconButton onClick={toggleDarkMode} icon={<MoonIcon/>} style={{width: '20px', height: '20px', color: 'black'}}/>
            )
          }
        </div>
      </div>
        <div className="grid grid-cols-1 grid-rows-3 place-items-center mt-[4rem] gap-y-10">
          <Link href="/what_i_use/keyboard">
            <div className="flex flex-col justify-center items-center select-none space-y-2 bg-[#000000] rounded-xl cursor-pointer hover:translate-y-[-5px]" style={{transition: '0.2s'}}>
              <div className="h-auto w-[28rem]">
                <Image src={Keyboard} quality={100} draggable={false} className="rounded-xl"/>
              </div>
              <a className="font-quicksand text-2xl text-white pb-4">Razor RZ03-0274</a>
            </div>
          </Link>

          <Link href="/what_i_use/chair">
            <div className="flex flex-col justify-center items-center select-none space-y-2 bg-[#000000] rounded-xl cursor-pointer hover:translate-y-[-5px]" style={{transition: '0.2s'}}>
              <div className="h-auto w-[28rem]">
                <Image src={Chair} quality={100} draggable={false} className="rounded-xl"/>
              </div>
              <a className="font-quicksand text-2xl text-white pb-4">ThunderX3 TC3BK Black</a>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default WhatIUse