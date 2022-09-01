import React from 'react'
import { Link } from 'react-router-dom'
import { works } from '../data/works'


export const Portfolio = () => {
  return (
    <div className='page'>
      <h2 className='heading'>Portfolio</h2>

      {
        works.map(work => {
          return (
            <article key={work.id}>
              <span>{work.category}</span>
              <h3><Link to={'/project/' + work.id}>{work.name}</Link></h3>
              <h4>{work.technologies}</h4>
            </article>
          )
        })
      }
    </div>
  )
}
