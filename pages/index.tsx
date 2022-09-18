import type { NextPage } from 'next';
import Timer from '../components/timer';
import Footer from '../components/footer';
import Header from '../components/header';
import Destination from '../components/destination';

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen w-screen grid grid-rows-3 md:grid-rows-2 md:grid-cols-3 md:items-center lg:items-start	 font-main bg-black" >
      {/* 
      <Footer/>
      <Header/>
      <Timer/>  
      <Destination/>   
      */}
      <Header/>
      <Timer/> 
      <Destination/>  
      </div>

      
    </>
  )
}

export default Home
