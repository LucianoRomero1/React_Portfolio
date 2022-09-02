import React from 'react'
import { Link } from 'react-router-dom'
import { WorkList } from './WorkList'

export const Home = () => {
  return (
    <div className='home'>
      <h2>
        Hi! Im Luciano Romero and I'm <strong>Web Developer</strong> in Rafaela - Santa Fe
        {/* Aca podria agregar mis tecnologias con algun ul o algo */}
      </h2>
      <h3>
        If you are interesting in a make your first website, please <Link to='/contact'>contact me! </Link>
      </h3>
      <section className='last-works'>
        <h3 className='heading'>Some of my projects: </h3>
        <WorkList limit='2' />
      </section>
    </div>
  )
}
