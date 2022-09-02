import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Contact } from '../components/Contact';
import { Curriculum } from '../components/Curriculum';
import { Error } from '../components/Error';
import { Home } from '../components/Home';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Portfolio } from '../components/Portfolio';
import { Project } from '../components/Project';
import { Services } from '../components/Services';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      {/* Header y navegacion */}
      <HeaderNav />
      {/* Contenido central */}
      <section className='content'>


        <Routes>
          <Route path='/' element={<Navigate to='/home' />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/curriculum' element={<Curriculum />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/project/:id' element={<Project />}></Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </section>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}
