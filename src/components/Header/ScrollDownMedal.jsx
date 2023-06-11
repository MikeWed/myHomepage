import React from 'react'
import ArrowDown from './ArrowDown'
import '../../styles/Header/scrollmedal.scss'

export default function ScrollDownMedal() {
  return (
    <div className='scrolldown-container'>
      <div className="scrolldown-wrapper">
        <div className="ring"></div>
        <ArrowDown />
      </div>
    </div>
  )
}
