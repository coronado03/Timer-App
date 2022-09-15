import type { NextPage } from 'next'
import Timer from '../components/timer'
import Footer from '../components/footer'
import Header from '../components/header'
import Destination from '../components/destination'

const Home: NextPage = () => {
  return (
    <>
    <div className="h-screen w-screen grid font-main bg-[#161616]">
      {/* 
      <Header/>
      <Footer/>
      
      <Destination/>*/}
      <Timer/>
      
    </div>
    </>
  )
}

export default Home
