import React from 'react'
import '../../styles/Header/header.scss'
import ScrollDownMedal from './ScrollDownMedal'
import MikeBody from './MikeBody'

import logo_light from '../../assets/logo_blueGreen_light.svg'
import hero1 from '../../assets/mike_hero1.png'

export default function Header() {
  return (
    <header>
        <img src={logo_light} id='logo'/>
        <div className="hero-container">
          <div className="hero-wrapper">
            <img src={hero1} className='hero' id='heroColor' />
            <MikeBody />
          </div>
        </div>
        <div className="intro-container">
          <div className="intro-wrapper">
            <p>Hallo, ich bin</p>
            <h1 id='name'>Mike Wedemann</h1>
            <p>Ingenieur und Frontend-Entwickler</p>
          </div>
        </div>
        <ScrollDownMedal />
    </header>
  )
}
