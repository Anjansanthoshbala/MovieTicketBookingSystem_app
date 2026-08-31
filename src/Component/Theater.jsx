
// import { Link } from "react-router-dom"

function TheaterCard({ theater,onSelectShow }) {
    return (
        <>
        <h1 className="text-cyan-700 font-bold">Select Theater</h1>
        {theater.map((t)=>(
        <div 
          key={t.id}
        className="bg-gray-800  text-white rounded-xl shadow-md hover:shadow-xl p-5 transition duration-300 mb-5">
          
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
            {/* Theater Name */}
            <h2 className="text-xl font-bold  mb-2">
                {t.name}
            </h2>

            {/* Location */}
            <p className="text-gray-400 mb-3">
                📍 {t.location}
            </p>
             
             <p className="text-gray-600 mt-1">
                {t.address}
             </p>
             <p className="text-sm text-gray-500 mt-2">
                {t.distance}
             </p>
            </div>
            {/* Screens */}
            <div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {t.screens} Screens
                </span>
            </div>
          </div>
            {/* <p className="text-gray-300 mb-4">
                Screens: {theater.screens}
            </p> */}
            <div className="flex flex-wrap gap-2 mt-4">
                   {t.facilities.map((facility,index) => (
                    <span 
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                        {facility}
                    </span>
                  ))}
            </div>
            
               <hr className="my-5"/>
               <h3 className="font-semibold text-gray-800 mb-3">
                   Select Showtime
               </h3>
            {/* Show Times */}
            <div className="flex flex-wrap gap-3">
                {t.showtimes.map((showtime) => (
                    <button key={showtime}
                    onClick={()=> onSelectShow?.(t, showtime)}
                    className="border border-red-500 text-red-500 px-4 py-2 rounded-lg
                                hover:bg-red-500 hover:text-white transition duration-300"
                                 >
                        {showtime}
                    </button>
                ))}
            </div>

        </div>
        ))}
        </>
    )
}

export default TheaterCard
