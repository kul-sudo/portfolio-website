const Home = () => {
  return (
    <div className="grid place-items-center space-y-10">
      <span className="flex text-3xl bg-[#525252] w-[15rem] h-[8rem] rounded-xl justify-center items-center text-white font-quicksand hover:translate-y-[-10px]" style={{transition: '0.2s'}}>Blog</span>
      <span className="flex text-3xl bg-[#525252] w-[15rem] h-[8rem] rounded-xl text-center justify-center items-center text-white font-quicksand hover:translate-y-[-10px]" style={{transition: '0.2s'}}>My social<br/>media</span>
    </div>
  )
}

export default Home