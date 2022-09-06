import type { NextPage } from 'next'
import Timer from '../components/timer'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <>
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-main'>
      <h1 className='text-4xl	text-white my-10'>Remaining time in Honduras:</h1>
      
      <Timer/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
