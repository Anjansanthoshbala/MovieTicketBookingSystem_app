import './App.css'

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

import Home from './Pages/Home'
import Theaters from './Pages/Theaters'
import SeatSelection from './Pages/SeatSelection'
import Payment from "./Pages/Payment";
import BookingSuccess from "./Pages/BookingSuccess";
import MyBookings from "./Pages/MyBookings";

import MovieCard from './Component/Moviecard'
import movieData from './data/Moviedata'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/movies" element={<MovieCard movie={movieData} />}/>
                <Route path="/theaters" element={<Theaters />}/>
                <Route path="/seats" element={<SeatSelection />}/>
                <Route path="/payment" element={<Payment />} />
                <Route path="/booking-success" element={<BookingSuccess />}/>
                <Route path="/my-bookings" element={<MyBookings />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App