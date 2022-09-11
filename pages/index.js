import Head from 'next/head'
import GraphicsComputer from '../components/voxel-computer'
import useTheme from '../lib/theme'
import { useEffect } from 'react'
import { SunIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GithubLogo from '../public/github-logo.png'
import Image from 'next/image'
import TealDivider from '../components/divider'

const Home = () => {
  const toggleDarkMode = useTheme((state) => state.toggleMode)
  const dark = useTheme((state) => state.dark)

  useEffect(() => {
    if (dark) {
      document.querySelector('html').classList.add('bright')
      document.getElementById('navbar').style.color = 'black'
      document.getElementById('sun').style.display = 'none'
      document.getElementById('moon').style.display = 'block'
      document.getElementById('to-add-shadow1').classList.add('shadow-lg')
      document.getElementById('to-add-shadow2').classList.add('shadow-lg')
      document.getElementById('to-add-shadow3').classList.add('shadow-lg')
    } else {
      document.querySelector('html').classList.remove('bright')
      document.getElementById('navbar').style.color = 'white'
      document.getElementById('sun').style.display = 'block'
      document.getElementById('moon').style.display = 'none'
      document.getElementById('to-add-shadow1').classList.remove('shadow-lg')
      document.getElementById('to-add-shadow2').classList.remove('shadow-lg')
      document.getElementById('to-add-shadow3').classList.remove('shadow-lg')
    }
  }, [dark])

  return (
    <div className="font-[600]">
      <Head>
        <title>Cyril&apos;s portfolio</title>
        <meta name="description" content="My personal cool-looking portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      
      <div className="flex justify-center align-middle fixed bottom-10 right-10 z-[1] 830px:block font-[600]" id="navbar">
        <div className="space-x-2">
          <Link href="/blog"><span className="font-quicksand cursor-pointer">Home</span></Link>
          <Link href="/blog"><span className="font-quicksand cursor-pointer">Blog</span></Link>
          <a className="font-quicksand" href="https://github.com/kul-sudo" id="github" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="flex justify-center before-830px:ml-3 mt-[0.05rem]">
          <div className="hidden" id="sun">
            <IconButton onClick={toggleDarkMode} icon={<SunIcon/>} style={{width: '20px', height: '20px', color: 'white'}}/>
          </div>

          <div className="hidden" id="moon">
            <IconButton onClick={toggleDarkMode} icon={<MoonIcon/>} style={{width: '20px', height: '20px', color: 'black'}}/>
          </div>
        </div>
      </div>

      <div className="flex mt-5 justify-center">
        <span className="flex items-center justify-center text-[1.5rem] text-center font-quicksand select-none bg-[#525252] rounded-xl w-[30rem] h-[5rem] text-white">Hello! I am a UI developer called Cyril.</span>
      </div>

      <div className="z-[1] mt-3">
        <GraphicsComputer></GraphicsComputer>
      </div>

      <div className="830px:flex 830px:justify-center font-quicksand 830px:mt-8 z-[0]">
        <div className="flex justify-center items-center before-830px:space-x-[15rem] 830px:block 830px:space-y-[1rem]">
          <div className="flex justify-center items-center align-middle w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 skew-x-[15deg]">
            <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]" id="to-add-shadow1">
              <div className="flex justify-center text-center mt-6">
                <span className="font-[700] skew-x-[-15deg]">Technologies</span>
              </div>
              <div className="flex items-center justify-center text-center align-middle mt-1">
                <span className="flex skew-x-[-15deg]">NextJS<br/>React<br/>JavaScript<br/>Python<br/>SQL</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center align-middle w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-pink-500 to-yellow-500 skew-x-[15deg]">
            <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]" id="to-add-shadow2">
              <div className="flex justify-center text-center mt-6">
                <span className="font-[700] skew-x-[-15deg]">My projects</span>
              </div>
              <div className="flex items-center justify-center text-center align-middle mt-7">
                <span className="skew-x-[-15deg]">
                  <a href="https://github.com/kul-sudo/eportal" rel="noreferrer" target="_blank" className="underline">eportal</a><br/>
                  <a href="https://github.com/kul-sudo/Smiling-Zombies" rel="noreferrer" target="_blank" className="underline">smiling zombies</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[4rem] 830px:mt-[1rem] font-quicksand">
        <div className="flex justify-center items-center align-middle w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-[#4dff03] to-[#00d0ff] skew-x-[15deg]">
          <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]" id="to-add-shadow3">
            <div className="flex justify-center text-center mt-6">
              <span className="font-[700] skew-x-[-15deg]">Hard skills</span>
            </div>
            <div className="flex items-center justify-center text-center align-middle mt-8">
              <span className="flex skew-x-[-15deg]">
                Solid English<br/>
                Stress tolerance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex mt-10 justify-center">
        <div className="flex items-center justify-center bg-[#525252] rounded-xl w-[20rem] h-[3rem]">
          <span className="text-[1.7rem] text-white font-quicksand select-none">Let's dive deeper</span>
          <ChevronDownIcon style={{width: '30px', height: '30px', color: 'white'}}/>
        </div>
      </div> */}

      <Link href="#dive-deeper">
        <div className="flex justify-center mt-10">
          <div className="example-container">
            <motion.div whileHover={{ scale: 1.1 }}>
              <div className="flex justify-center items-center">
                <span className="text-[1.7rem] text-white font-quicksand select-none">Let's dive deeper</span>
                <ChevronDownIcon style={{width: '30px', height: '30px', color: 'white'}}/>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>

      <div className="flex justify-center mt-[8rem]">
        <TealDivider/>
      </div>

      <div className="flex justify-center items-center mt-[8rem] flex-col space-y-10 select-none" id="dive-deeper">
        <Link href="/blog">
          <div className="flex justify-center items-center bg-[#525252] w-[15rem] h-[7rem] rounded-xl cursor-pointer hover:translate-y-[-10px]" style={{transition: '0.2s'}}>
            <span className="text-3xl text-white font-quicksand">Blog</span>
          </div>
        </Link>
        <a href="https://github.com/kul-sudo" target="_blank" rel="noreferrer" className="flex justify-center items-center bg-[#525252] w-[15rem] h-[7rem] rounded-xl hover:translate-y-[-10px] space-x-2" style={{transition: '0.2s'}}>
          <Image src={GithubLogo} height={30} width={30} alt="github-icon"/>
          <span className="text-3xl text-white font-quicksand text-center">GitHub</span>
        </a>
      </div>
    </div>
  )
}

export default Home