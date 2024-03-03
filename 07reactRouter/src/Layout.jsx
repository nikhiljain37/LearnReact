// import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    {/* using outlet we can change content and header and footer will remain same */}
    <Outlet/> 

    <Footer/>
    </>
  )
}

export default Layout