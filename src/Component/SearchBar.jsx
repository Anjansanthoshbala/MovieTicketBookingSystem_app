// import { useState } from "react"

function SearchBar({ search, setSearch }) {

    // const [search, setSearch] = useState("")

    // const handleSearch = (e) => {
    //  const value = e.target.value
    //     setSearch(e.target.value)
    //     // onSearch(e.target.value)
    //     setSearch(value)

    //     // onSearch(value)
    // }

    return (
        <div className=" w-[500px] max-w-3xl mx-auto">

            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl overflow-hidden mt-3">

                {/* Search Icon */}

                <span className="text-gray-400 text-xl px-4">
                    🔍
                </span>


                {/* Search Input */}

                <input
                    type="text"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search movies..."
                    className="flex-1 bg-transparent text-white px-2 py-4 outline-none placeholder-gray-500"
                />


                {/* Clear Button */}

                {search && (
                    <button
                        onClick={() => setSearch("")}
                        className="text-gray-400 hover:text-white px-4"
                    >
                        ✕
                    </button>
                )}

            </div>

        </div>
    )
}

export default SearchBar