import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {VscGithub} from 'react-icons/vsc'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vijay-kumar-k-y-83882389/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Vijay-Ky" target="_blank"><VscGithub/></a>
        <a href="https://www.youtube.com/channel/UC_0WjTXC3ZUvPzPAe1nJcBQ" target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocial