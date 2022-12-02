import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import MovieDetails from './MovieDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
        <Header/>
        <BrowserRouter>
          <Routes>
              <Route index element={<Body/>} /> 
              <Route path="/MovieDetails/:id" element={<MovieDetails/>} /> 
          </Routes>
        </BrowserRouter>
        <Footer/> 
    </div>
  )
}

export default App