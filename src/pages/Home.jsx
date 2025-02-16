import React from 'react'
import Hero from '../components/Hero'
import Specials from '../components/Specials'

const Home = () => {
  return (
    <main className="bg-red-300 min-h-screen">
        <Hero />
        <Specials />
    </main>
  )
}

export default Home