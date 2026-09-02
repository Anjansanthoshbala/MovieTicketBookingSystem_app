import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-gray-950 text-white px-8 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-red-500">MovieBook</Link>
            <div className="flex items-center gap-8">
                <Link to="/" className="hover:text-red-500 transition">Home</Link>
                <Link to="/movies" className="hover:text-red-500 transition">Movies</Link>
                <Link to="/my-bookings" className="text-white hover:text-cyan-400">My Bookings</Link>
                <Link to="/login" className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar