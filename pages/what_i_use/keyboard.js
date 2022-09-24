import Head from 'next/head'
import useTheme from '../../lib/theme'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'
import GraphicsKeyboard from '../../components/keyboard-graphics'

const Home = () => {
  const toggleDarkMode = useTheme((state) => state.toggleMode)
  const dark = useTheme((state) => state.dark)
  const [moonShow, setMoonShow] = useState(false)

  useEffect(() => {
    if (dark) {
      document.querySelector('html').classList.add('bright')
      document.getElementById('navbar').style.color = 'black'
      document.getElementById('desc').style.color = 'black'
      setMoonShow(true)
    } else {
      document.querySelector('html').classList.remove('bright')
      document.getElementById('navbar').style.color = 'white'
      document.getElementById('desc').style.color = 'white'
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

      <div className="z-[0] mt-[1rem]">
        <GraphicsKeyboard/>
      </div>

      <div className="flex justify-center z-[1] backdrop-blur-[0.625rem] mt-[-0.05rem]">
        <div className="flex flex-col text-center font-quicksand text-white w-[56.5rem] backdrop-blur-[0.625rem]">
          <span className="font-quicksand text-3xl text-white" id="desc">I truly like <a href="https://www.amazon.com/Razer-Cynosa-Lite-Gaming-Keyboard/dp/B087C98QJJ" target="_blank" rel="noreferrer" className="underline">this</a> keyboard as it is good everything you might be doing: gaming, programming, surfing the Internet.<br/>I have used it for a year or so and I can say that I still haven't had any problems with it.</span>
        </div>
      </div>
    </div>
  )
}

export default Home