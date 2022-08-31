import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cyril Nicholson</title>
        <meta name="description" content="My person cool-looking portfolio"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="flex justify-center mt-8">
        <span className="text-7xl text-white text-center font-quicksand select-none">Cyril</span>
      </div>

      <div className="830px:flex 830px:justify-center mt-[4rem] font-quicksand 830px:mt-7">
        <div className="flex justify-center items-center before-830px:space-x-[15rem] 830px:block 830px:space-y-[1rem]">
          <div className="flex justify-center items-center align-middle select-none w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 skew-x-[15deg]">
            <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
              <div className="flex justify-center text-center mt-6">
                <span className="font-[700] skew-x-[-15deg]">Technologies</span>
              </div>
              <div className="flex items-center justify-center text-center align-middle mt-6">
                <span className="flex skew-x-[-15deg]">Follow the deadline<br/>Follow the law<br/>A good reputation<br/>Not let people down</span>
              </div>
            </div>
          </div>


          <div className="flex justify-center items-center align-middle select-none w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-pink-500 to-yellow-500 skew-x-[15deg]">
            <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
              <div className="flex justify-center text-center mt-6">
                <span className="font-[700] skew-x-[-15deg]">Properties</span>
              </div>
              <div className="flex items-center justify-center text-center align-middle mt-6">
                <span className="flex skew-x-[-15deg]">Name: Cyril<br/>Sex: male<br/>Fave food: sashimi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[4rem] 830px:mt-[1rem] font-quicksand">
        <div className="flex justify-center items-center align-middle select-none w-[13rem] h-[16rem] rounded-[0.3rem] bg-gradient-to-r from-[#4dff03] to-[#00d0ff] skew-x-[15deg]">
          <div className="absolute justify-center items-center align-middle w-[18rem] h-[12rem] bg-transculent backdrop-blur-[0.625rem] rounded-[0.3rem]">
            <div className="flex justify-center text-center mt-6">
              <span className="font-[700] skew-x-[-15deg]">My values</span>
            </div>
            <div className="flex items-center justify-center text-center align-middle mt-6">
              <span className="flex skew-x-[-15deg]">Follow the deadline<br/>Follow the law<br/>A good reputation<br/>Not let people down</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
