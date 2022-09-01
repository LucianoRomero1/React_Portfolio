import React from 'react'

export const Contact = () => {
  return (
    <div className='page'>
      <h2 className='heading'>Contact</h2>
      <form className='contact' action='mailto:licharomero97@gmail.com'>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Lastname' />
        <input type='text' placeholder='Email' />
        <textarea placeholder='Reason to contact' />
        
        <input type='submit' value='Send' />
      </form>
    </div>
  )
}
