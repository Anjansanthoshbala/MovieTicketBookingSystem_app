import { useLocation, useNavigate } from "react-router-dom"
import TheaterCard from "../Component/TheaterCard"
import theaterData from "../data/Theater"

function Theaters() {

    const location = useLocation()
    const navigate = useNavigate()
    const movie = location.state?.movie
    const handleSelectShow = (theater, showtime) => {

        navigate("/seats", {
            state: {
                movie: movie,
                theater: theater,
                showtime: showtime
            }
        })
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
            {movie && (
                <div className="max-w-5xl mx-auto mb-8">

                    <div className="bg-gray-800 rounded-xl p-5 flex flex-col md:flex-row items-center gap-5">

                        <img src={movie.image} alt={movie.title} className="w-24 h-32 object-cover rounded-lg"/>

                        <div>
                            <p className="text-gray-400 mb-1">Selected Movie</p>
                            <h2 className="text-2xl font-bold text-red-500">{movie.title}</h2>
                            <p className="text-gray-400 mt-2">{movie.genre}</p>
                            <p className="text-gray-400 mt-1">⭐ {movie.rating} | {movie.duration}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-5xl mx-auto">
                <TheaterCard theater={theaterData} onSelectShow={handleSelectShow}/>
            </div>
        </div>
    )
}

export default Theaters