import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Phrase from './components/Phrase/Phrase'

function App() {

  return (
    <div className='app'>
      <Header/>
      <AboutMe/>
      <Phrase/>
    </div>
  )
}

export default App
