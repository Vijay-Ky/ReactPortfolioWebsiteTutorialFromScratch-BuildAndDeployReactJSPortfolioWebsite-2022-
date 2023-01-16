import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">

          <div className="service__head">
            <h3>Java Full Stack Training</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Core Java Basics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Core Java Advanced</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Spring</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hibernate</p>
            </li>
          </ul>
        </article>
        {/* end of Java full stack training */}

        <article className="service">

          <div className="service__head">
            <h3>Web Develpement Training</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React</p>
            </li>
          </ul>
        </article>
        {/* End of web developmet */}

        <article className="service">

          <div className="service__head">
            <h3>Python Training</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Core Python Basics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Core Python Advanced</p>
            </li>
          </ul>
        </article>
         {/* End of Python */}
      </div>
    </section>
  )
}

export default Services