import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav className="bg-gray-950 text-white px-8 py-4 flex justify-between items-center">

            {/* Logo */}
            <Link
                to="/"
                className="text-2xl font-bold text-red-500"
            >
                MovieBook
            </Link>


            {/* Navigation */}
            <div className="flex items-center gap-8">

                <Link
                    to="/"
                    className="hover:text-red-500 transition"
                >
                    Home
                </Link>

                <Link
                    to="/movies"
                    className="hover:text-red-500 transition"
                >
                    Movies
                </Link>

                {/* <Link
                    to="/theaters"
                    className="hover:text-red-500 transition"
                >
                    Theaters
                </Link> */}

                <Link
                    to="/bookings"
                    className="hover:text-red-500 transition"
                >
                    My Bookings
                </Link>

                <Link
                    to="/login"
                    className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
                >
                    Login
                </Link>

            </div>

        </nav>
    )
}

export default Navbar