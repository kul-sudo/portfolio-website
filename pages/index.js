import Head from 'next/head'
import GraphicsComputer from '../components/voxel-computer'
import useTheme from '../lib/theme'
import { useEffect } from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

const Home = () => {
  const sun = "M10,7.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S7.5,11.38,7.5,10S8.62,7.5,10,7.5z M10,6c-2.21,0-4,1.79-4,4s1.79,4,4,4 s4-1.79,4-4S12.21,6,10,6L10,6z M3.75,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2C1.34,9.25,1,9.59,1,10 s0.34,0.75,0.75,0.75H3.75z M18.25,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2c-0.41,0-0.75,0.34-0.75,0.75 s0.34,0.75,0.75,0.75H18.25z M9.25,3.75C9.25,4.16,9.59,4.5,10,4.5c0.41,0,0.75-0.34,0.75-0.75v-2C10.75,1.34,10.41,1,10,1 S9.25,1.34,9.25,1.75V3.75z M13.89,5.05c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06c0.29-0.29,0.29-0.77,0-1.06 c-0.29-0.29-0.77-0.29-1.06,0L13.89,5.05z M3.99,14.95c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06 c0.29-0.29,0.29-0.77,0-1.06c-0.29-0.29-0.77-0.29-1.06,0L3.99,14.95z M5.05,6.11c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 L5.05,3.99c-0.29-0.29-0.77-0.29-1.06,0s-0.29,0.77,0,1.06L5.05,6.11z M14.95,16.01c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 l-1.06-1.06c-0.29-0.29-0.77-0.29-1.06,0c-0.29,0.29-0.29,0.77,0,1.06L14.95,16.01z M9.25,18.25C9.25,18.66,9.59,19,10,19 c0.41,0,0.75-0.34,0.75-0.75v-2c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75V18.25z"
  const moon = "M8.04,4.86C7.88,5.39,7.8,5.94,7.8,6.5c0,3.14,2.56,5.7,5.7,5.7c0.56,0,1.11-0.08,1.64-0.24c-0.79,2.07-2.8,3.54-5.14,3.54 c-3.03,0-5.5-2.47-5.5-5.5C4.5,7.66,5.97,5.65,8.04,4.86z M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7 c0-0.36-0.03-0.72-0.08-1.06C16.16,10,14.91,10.7,13.5,10.7c-2.32,0-4.2-1.88-4.2-4.2c0-1.41,0.7-2.66,1.76-3.42 C10.72,3.03,10.36,3,10,3L10,3z"

  const toggleDarkMode = useTheme((state) => state.toggleMode)
  const dark = useTheme((state) => state.dark)

  useEffect(() => {
    if (dark) {
      document.querySelector('html').classList.add('bright')
      document.getElementById('caption').style.color = 'black'
      document.getElementById('github').style.color = 'black'
      document.getElementById('sun').style.display = 'none'
      document.getElementById('moon').style.display = 'block'
    } else {
      document.querySelector('html').classList.remove('bright')
      document.getElementById('caption').style.color = 'white'
      document.getElementById('github').style.color = 'white'
      document.getElementById('sun').style.display = 'block'
      document.getElementById('moon').style.display = 'none'
    }
  }, [dark])

  return (
    <>
      <Head>
        <title>Cyril&apos;s portfolio</title>
        <meta name="description" content="My personal cool-looking portfolio"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="z-[1]">
        <GraphicsComputer></GraphicsComputer>
      </div>
      
      <div className="flex justify-center align-middle fixed bottom-10 right-10 z-[1] 830px:block">
        <a className="font-quicksand" href="https://github.com/kul-sudo" id="github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <div className="flex justify-center before-830px:ml-3 mt-[0.05rem]">
          <div id="sun">
            <IconButton onClick={toggleDarkMode} icon={<SunIcon/>} style={{width: '20px', height: '20px', color: 'white'}}/>
          </div>

          <div id="moon">
            <IconButton onClick={toggleDarkMode} icon={<MoonIcon/>} style={{width: '20px', height: '20px', color: 'black'}}/>
          </div>
        </div>
      </div>

      <div className="flex justify-center backdrop-blur-[0.625rem] z-[0]">
        <span className="text-7xl text-white text-center font-quicksand select-none" id="caption">Cyril</span>
      </div>

      <div className="830px:flex 830px:justify-center mt-[3rem] font-quicksand 830px:mt-8 z-[0]">
        <div className="flex justify-center items-center before-830px:space-x-[15rem] 830px:block 830px:space-y-[1rem]">
          <div className="flex justify-center items-center align-middle w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 skew-x-[15deg]">
            <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
              <div className="flex justify-center text-center mt-6">
                <span className="font-[700] skew-x-[-15deg]">Technologies</span>
              </div>
              <div className="flex items-center justify-center text-center align-middle mt-1">
                <span className="flex skew-x-[-15deg]">NextJS<br/>React<br/>JavaScript<br/>Python<br/>SQL</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center align-middle w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-pink-500 to-yellow-500 skew-x-[15deg]">
            <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
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
          <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
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
    </>
  )
}

export default Home