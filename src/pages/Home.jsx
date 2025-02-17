import React from 'react'
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import Testimonial from '../components/Testimonial'
import About from '../components/About'

const Home = () => {
  return (
    <main className="bg-red-300 min-h-screen">
        <Hero />
        <Specials />
        <Testimonial />
        <About />
    </main>
  )
}

export default Home