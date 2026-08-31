import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import MovieCard from './Component/Moviecard'
 import movieData from './data/Moviedata'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheaterCard from './Component/Theater'
import theaterData from './data/Theater'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      {/* <Home/>
      <MovieCard movie={movieData}/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieCard movie={movieData}/>}/>
        <Route path="/theaters" element={<TheaterCard theater={theaterData}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
