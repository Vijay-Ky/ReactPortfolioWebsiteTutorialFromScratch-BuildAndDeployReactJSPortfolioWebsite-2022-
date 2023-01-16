import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {FaUser} from 'react-icons/fa'
import {ImBook} from 'react-icons/im'
import {RiServiceFill} from 'react-icons/ri'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><ImHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><ImBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')}className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar /></a>
    </nav>
  )
}

export default Nav