import Head from 'next/head'
import VoxelComputer from '../components/voxel-computer'

const Home = () => {
  return (
    <>
      <Head>
        <title>Cyril&apos;s portfolio</title>
        <meta name="description" content="My personal cool-looking portfolio"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="z-[1]">
        <VoxelComputer></VoxelComputer>
      </div>
      
      <div className="fixed bottom-0 right-0 mb-5 mr-5 z-[1]">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="M24 34q-4.15 0-7.075-2.925T14 24q0-4.15 2.925-7.075T24 14q4.15 0 7.075 2.925T34 24q0 4.15-2.925 7.075T24 34ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5h5q.65 0 1.075.425Q10 23.35 10 24q0 .65-.425 1.075-.425.425-1.075.425Zm36 0q-.65 0-1.075-.425Q38 24.65 38 24q0-.65.425-1.075.425-.425 1.075-.425h5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 10q-.65 0-1.075-.425Q22.5 9.15 22.5 8.5v-5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 10 24 10Zm0 36q-.65 0-1.075-.425-.425-.425-.425-1.075v-5q0-.65.425-1.075Q23.35 38 24 38q.65 0 1.075.425.425.425.425 1.075v5q0 .65-.425 1.075Q24.65 46 24 46ZM12 14.1l-2.85-2.8q-.45-.45-.425-1.075.025-.625.425-1.075.45-.45 1.075-.45t1.075.45L14.1 12q.4.45.4 1.05 0 .6-.4 1-.4.45-1.025.45-.625 0-1.075-.4Zm24.7 24.75L33.9 36q-.4-.45-.4-1.075t.45-1.025q.4-.45 1-.45t1.05.45l2.85 2.8q.45.45.425 1.075-.025.625-.425 1.075-.45.45-1.075.45t-1.075-.45ZM33.9 14.1q-.45-.45-.45-1.05 0-.6.45-1.05l2.8-2.85q.45-.45 1.075-.425.625.025 1.075.425.45.45.45 1.075t-.45 1.075L36 14.1q-.4.4-1.025.4-.625 0-1.075-.4ZM9.15 38.85q-.45-.45-.45-1.075t.45-1.075L12 33.9q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-2.8 2.85q-.45.45-1.075.425-.625-.025-1.075-.425Z"/></svg>
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
              <span className="font-[700] skew-x-[-15deg]">Soft skills</span>
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