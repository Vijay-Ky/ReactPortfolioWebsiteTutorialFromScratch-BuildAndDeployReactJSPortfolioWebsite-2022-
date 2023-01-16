import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'>

              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about__icon'/>
              <h5>Students Trained</h5>
              <small>1000+</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Personal Projects</h5>
              <small>50+</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem similique, ipsam nisi est maiores et fugit, accusamus nihil eos tempora distinctio laboriosam debitis delectus eum quasi. Ipsum quo iusto doloribus.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About