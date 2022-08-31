import Head from 'next/head'
import VoxelComputer from '../components/voxel-computer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Cyril's portfolio</title>
        <meta name="description" content="My personal cool-looking portfolio"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="z-[1]">
        <VoxelComputer></VoxelComputer>
      </div>

      <div className="flex justify-center backdrop-blur-[0.625rem] z-[0]">
        <span className="text-7xl text-white text-center font-quicksand select-none">Cyril</span>
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
              <div className="flex items-center justify-center text-center align-middle mt-5">
                <span className="skew-x-[-15deg]">
                  <a href="https://github.com/kul-sudo/eportal" target="_blank" className="underline">eportal</a><br/>
                  <a href="https://github.com/kul-sudo/Smiling-Zombies" target="_blank" className="underline">smiling zombies</a>
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
              <span className="font-[700] skew-x-[-15deg]">Soft skills</span>
            </div>
            <div className="flex items-center justify-center text-center align-middle mt-6">
              <span className="flex skew-x-[-15deg]">
                Glorious English<br/>
                Stress tolerance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home