
function GenreFilter({ selectedGenre, setSelectedGenre }) {

    const genres = [
        "All",
        "Action",
        "Drama",
        "Romance",
        "Comedy",
        "Thriller",
        "Fantasy",
        "Sci-Fi",
        "Sports"
    ]

    return (
        <div className="flex flex-wrap justify-center gap-3 mt-5">
            {genres.map((genre) => (
                <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-5 py-2 rounded-lg font-semibold transition
                        ${
                            selectedGenre === genre
                                ? "bg-red-600 text-white"
                                : "bg-gray-800 text-gray-300 hover:bg-red-700"
                        }
                    `}>
                    {genre}
                </button>
            ))}
        </div>
    )
}
export default GenreFilter