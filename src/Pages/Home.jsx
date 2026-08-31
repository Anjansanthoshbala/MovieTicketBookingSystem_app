import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-white mt-4">

            {/* Hero Section */}

            <section
                className="min-h-[600px] flex items-center justify-center text-center px-6"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

                <div className="max-w-3xl">

                    <p className="text-red-500 text-lg font-semibold mb-4">
                        WELCOME TO MOVIEBOOK
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Your Movie.
                        <br />

                        Your Theatre.
                        <br />

                        <span className="text-red-500">
                            Your Experience.
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg mb-8">
                        Discover the latest movies, choose your favourite
                        theatre and book your tickets easily.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">

                        <Link
                            to="/movies"
                            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition"
                        >
                            🎬 Browse Movies
                        </Link>

                        <Link
                            to="/theatres"
                            className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition"
                        >
                            🎭 Explore Theatres
                        </Link>

                    </div>

                </div>

            </section>


            {/* Search Section */}

            <section className="px-6 py-12">

                <div className="max-w-5xl mx-auto">

                    <div className="bg-gray-800 rounded-2xl p-6">

                        <h2 className="text-2xl font-bold mb-5 text-center">
                            Find Your Movie
                        </h2>

                        <div className="flex flex-col md:flex-row gap-4">

                            <input
                                type="text"
                                placeholder="Search for movies..."
                                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-5 py-3 outline-none focus:border-red-500"
                            />

                            <select
                                className="bg-gray-700 border border-gray-600 rounded-lg px-5 py-3 outline-none"
                            >
                                <option>Select City</option>
                                <option>Hyderabad</option>
                                <option>Chennai</option>
                                <option>Bangalore</option>
                                <option>Mumbai</option>
                            </select>

                            <button
                                className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-lg font-semibold"
                            >
                                Search
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* About MovieBook */}

            <section className="px-6 py-16 bg-gray-950">

                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-4xl font-bold mb-5">
                        Welcome to MovieBook
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
                        MovieBook makes movie ticket booking simple and
                        convenient. Find movies, explore theatres, check
                        showtimes and choose your favourite seats from
                        anywhere.
                    </p>

                </div>

            </section>


            {/* Features */}

            <section className="px-6 py-16">

                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-bold text-center mb-10">
                        Why Choose MovieBook?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Feature 1 */}

                        <div className="bg-gray-800 rounded-xl p-8 text-center">

                            <div className="text-5xl mb-5">
                                🎬
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Latest Movies
                            </h3>

                            <p className="text-gray-400">
                                Explore the latest and most popular movies
                                playing in theatres.
                            </p>

                        </div>


                        {/* Feature 2 */}

                        <div className="bg-gray-800 rounded-xl p-8 text-center">

                            <div className="text-5xl mb-5">
                                🎭
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Best Theatres
                            </h3>

                            <p className="text-gray-400">
                                Find theatres near you and choose the
                                perfect showtime.
                            </p>

                        </div>


                        {/* Feature 3 */}

                        <div className="bg-gray-800 rounded-xl p-8 text-center">

                            <div className="text-5xl mb-5">
                                💺
                            </div>

                            <h3 className="text-xl font-bold mb-3">
                                Easy Seat Booking
                            </h3>

                            <p className="text-gray-400">
                                Select your favourite seats and book your
                                tickets quickly and easily.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Call To Action */}

            <section className="px-6 py-20 bg-red-600 text-center">

                <h2 className="text-4xl font-bold mb-4">
                    Ready for Your Next Movie?
                </h2>

                <p className="text-red-100 text-lg mb-8">
                    Choose a movie, select your theatre and book your seats.
                </p>

                <Link
                    to="/movies"
                    className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition"
                >
                    Start Booking
                </Link>

            </section>

        </div>
    )
}

export default Home