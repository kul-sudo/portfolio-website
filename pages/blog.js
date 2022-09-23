import Head from 'next/head'
import Image from 'next/image'
import useTheme from '../lib/theme'
import Keyboard from '../public/keyboard.jpg'
import TealDivider from '../components/divider'
import Link from 'next/link'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Blog = () => {
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
    <>
      <Head>
        <title>Cyril&apos;s portfolio</title>
        <meta name="description" content="The blog of my personal portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="flex justify-center select-none left-[50%] top-0 pt-4 pb-2 w-[100%] translate-x-[-50%] backdrop-blur-[0.625rem] fixed z-[1] 830px:block font-[600]" id="navbar">
        <div className="flex justify-center space-x-2">
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
      
      <div className="grid gap-5 mt-[5rem] grid-cols-1 text-white font-quicksand font-[600] text-center place-items-center">
        <Link href="/blog/beginner_problems_explained_easier">
          <div className="bg-black w-[20rem] h-[30rem] rounded-xl hover:translate-y-[-5px] cursor-pointer" style={{transition: '0.2s'}}>
            <div className="select-none">
              <Image src={Keyboard} quality={100} draggable={false}/>
            </div>
            <div className="pt-8 text-3xl">
              <span>9/10/2022</span>
            </div>
            <div className="flex justify-center pt-5">
              <TealDivider/>
            </div>

            <div className="pt-4">
              <span className="text-4xl">All of the problems of beginners explained easier</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Blog