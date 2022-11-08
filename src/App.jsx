import React from "react"
import Clients from "./components/clients"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Works from "./components/Works"

function App() {
  
  return (
    <div>
      <Header/>
      <Hero/>
      <Clients/>
      <Works/>
      <Reviews/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
