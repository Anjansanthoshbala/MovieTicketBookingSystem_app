function Seat({ seat, selected, booked, onClick }) {

    return (
        <button
            onClick={() => !booked && onClick(seat)}
            disabled={booked}
            className={`
                w-9 h-9 m-1 rounded-t-md text-sm font-semibold
                transition duration-200

                ${booked
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : selected
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white hover:bg-green-400"
                }
            `}
        >
            {seat}
        </button>
    )
}

export default Seat