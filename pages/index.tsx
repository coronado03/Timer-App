import type { NextPage } from 'next'
import Timer from '../components/timer'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <>
    <div className="h-screen w-screen font-main bg-center bg-cover bg-[url('../public/poland.jpg')]">
      <Timer/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
