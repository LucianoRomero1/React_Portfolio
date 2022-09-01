import React from 'react'

export const Services = () => {
  return (
    <div className='page'>
      <h2 className='heading'>Servicios</h2>
      <section className='services'>
        <article className='service'>
          <h3>Web design</h3>
          <p>Make your website look pretty</p>
        </article>
        <article className='service'>
          <h3>Web dev</h3>
          <p>Create your website from scratch</p>
        </article>
        <article className='service'>
          <h3>Web services</h3>
          <p>Create custom APIs</p>
        </article>
      </section>
    </div>
  )
}
