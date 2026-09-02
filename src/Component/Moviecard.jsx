
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "./Searchbar";
import GenreFilter from "./Genre";

function MovieCard({ movie }) {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState(movie || []);
    const [selectedGenre, setSelectedGenre] = useState("all");

    const navigate = useNavigate();

    useEffect(() => {
        let filterdata = movie || [];

        // Search filter
        if (search.trim() !== "") {
            filterdata = filterdata.filter((m) =>
                m.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Genre filter
        if (selectedGenre.toLowerCase() !== "all") {
            filterdata = filterdata.filter((m) =>
                m.genre.toLowerCase().includes(selectedGenre.toLowerCase())
            );
        }

        setMovies(filterdata);
    }, [search, movie, selectedGenre]);

    return (
        <>
            {/* Search */}
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            {/* Genre Filter */}
            <GenreFilter
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
            />

            {/* Movie Cards */}
            <div className="flex flex-wrap justify-evenly mt-2">
                {movies.map((m) => (
                    <div
                        key={m.id}
                        className="w-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 mt-4"
                    >
                        <img
                            src={m.image}
                            alt={m.title}
                            className="w-full h-80 object-cover"
                        />

                        <div className="p-5">
                            <h2 className="text-xl font-bold text-white mb-2">
                                {m.title}
                            </h2>

                            <p className="text-gray-400 mb-3">
                                {m.genre}
                            </p>

                            <div className="flex justify-between items-center mb-4">
                                <span className="text-yellow-400">
                                    ⭐ {m.rating}
                                </span>

                                <span className="text-gray-400">
                                    {m.duration}
                                </span>
                            </div>

                            <button
                                onClick={() =>
                                    navigate("/theaters", {
                                        state: {
                                            movie: m
                                        }
                                    })
                                }
                                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* No movies found */}
            {movies.length === 0 && (
                <p className="text-center text-gray-400 mt-10 text-lg">
                    No movies found
                </p>
            )}
        </>
    );
}

export default MovieCard;
