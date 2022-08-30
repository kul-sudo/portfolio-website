import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cyril Nicholson</title>
        <meta name="description" content="My person cool-looking portfolio"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {/* <div className="flex justify-center">
        <div className="skew-x-[15deg] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[25rem] h-[50rem] mt-[5rem] rounded-xl">
          <div className="absolute top-[25rem] right-[50%] translate-x-[50%] translate-y-[-50%]">
            <div className="flex justify-center items-center align-middle bg-transculent backdrop-blur-[0.625rem] w-[40rem] h-[25rem] rounded-xl font-noto text-3xl text-center">
              <div className="flex justify-center items-center align-middle">
                <span>
                  Technologies<br/><br/>SQL<br/>Python<br/>NextJS (my favourite)<br/>Svelte<br/>React<br/>JavaScript<br/>TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex justify-center mt-8">
        <span className="text-7xl text-white text-center font-quicksand select-none">D Nicholson</span>
      </div>

      <div className="flex justify-center items-center flex-wrap space-x-[10rem] mt-20 1100px:flex-nowrap">
        <div className="flex justify-center items-center align-middle select-none w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 skew-x-[15deg]">
          <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
            <div className="flex justify-center text-center mt-4">
              <span className="flex font-semibold skew-x-[-15deg]">Technologies</span>
            </div>
            <div className="flex items-center justify-center text-center align-middle mt-6">
              <span className="flex skew-x-[-15deg]">Follow the deadline<br/>Follow the law<br/>A good reputation<br/>Not let people down</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center align-middle select-none w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-[#4dff03]  to-[#00d0ff] skew-x-[15deg]">
          <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
            <div className="flex justify-center text-center mt-4">
              <span className="flex font-semibold skew-x-[-15deg]">My values</span>
            </div>
            <div className="flex items-center justify-center text-center align-middle mt-6">
              <span className="flex skew-x-[-15deg]">Follow the deadline<br/>Follow the law<br/>A good reputation<br/>Not let people down</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center align-middle select-none w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-pink-500 to-yellow-500 skew-x-[15deg]">
          <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
            <div className="flex justify-center text-center mt-4">
              <span className="flex font-semibold skew-x-[-15deg]">Properties</span>
            </div>
            <div className="flex items-center justify-center text-center align-middle mt-6">
              <span className="flex skew-x-[-15deg]">Name: D<br/>Sex: male<br/>Fave food: sashimi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
