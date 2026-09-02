// import { useState } from "react"

function SearchBar({ search, setSearch }) {

    return (
        <div className=" w-[500px] max-w-3xl mx-auto">

            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-xl overflow-hidden mt-3">

                <span className="text-gray-400 text-xl px-4">🔍</span>
                <input
                    type="text"
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Search movies..."
                    className="flex-1 bg-transparent text-white px-2 py-4 outline-none placeholder-gray-500"/>

                {search && (
                    <button onClick={() => setSearch("")} className="text-gray-400 hover:text-white px-4">✕</button>
                )}
            </div>
        </div>
    )
}
export default SearchBar