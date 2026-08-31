
import { Link } from "react-router-dom"

function Footer() {

    return (
        <footer className="bg-gray-950 text-gray-300 mt-10">

            {/* Main Footer */}

            <div className="max-w-7xl mx-auto px-8 py-10">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Logo & About */}

                    <div>
                        <Link
                            to="/"
                            className="text-2xl font-bold text-red-500 mb-4 inline-block"
                        >
                            MovieBook
                        </Link>

                        <p className="text-gray-400 leading-6">
                            Book your favourite movies, choose your
                            theatre, select your seats and enjoy your
                            movie experience.
                        </p>
                    </div>


                    {/* Quick Links */}

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-red-500 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/movies"
                                    className="hover:text-red-500 transition"
                                >
                                    Movies
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/theatres"
                                    className="hover:text-red-500 transition"
                                >
                                    Theatres
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/bookings"
                                    className="hover:text-red-500 transition"
                                >
                                    My Bookings
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* Support */}

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Support
                        </h3>

                        <ul className="space-y-3">

                            <li className="hover:text-red-500 cursor-pointer">
                                Help Center
                            </li>

                            <li className="hover:text-red-500 cursor-pointer">
                                Contact Us
                            </li>

                            <li className="hover:text-red-500 cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-red-500 cursor-pointer">
                                Terms & Conditions
                            </li>

                        </ul>
                    </div>


                    {/* Contact */}

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Contact Us
                        </h3>

                        <p className="mb-3">
                            📧 support@moviebook.com
                        </p>

                        <p className="mb-3">
                            📞 +91 98765 43210
                        </p>

                        <p>
                            📍 Hyderabad, India
                        </p>

                    </div>

                </div>

            </div>


            {/* Bottom Footer */}

            <div className="border-t border-gray-800">

                <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-gray-500 text-sm">
                        © 2026 MovieBook. All rights reserved.
                    </p>

                    <div className="flex gap-5">

                        <span className="hover:text-red-500 cursor-pointer">
                            Facebook
                        </span>

                        <span className="hover:text-red-500 cursor-pointer">
                            Instagram
                        </span>

                        <span className="hover:text-red-500 cursor-pointer">
                            Twitter
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer

