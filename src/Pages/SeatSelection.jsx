import { useState } from "react";
import Seat from "../Component/Seat";
import { useLocation, useNavigate } from "react-router-dom";

function SeatSelection() {
    const location = useLocation();
    const navigate = useNavigate();

    const theater = location.state?.theater;
    const showtime = location.state?.showtime || "4:30 PM";
    const today = new Date();

    const showDate =
      location.state?.showDate ||
      today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    const movie = location.state?.movie;

    const rows = ["A", "B", "C", "D", "E", "F"];
    const seatsPerRow = 10;

    const [selectedSeats, setSelectedSeats] = useState([]);
    const bookedSeats = [
        "A3",
        "A4",
        "B5",
        "B6",
        "C2",
        "D7",
        "E4",
        "F8"
    ];

    const seatPrice = 200;

    const handleSeatClick = (seat) => {

        if (selectedSeats.includes(seat)) {
            setSelectedSeats(
                selectedSeats.filter((s) => s !== seat)
            );
        } else {
            setSelectedSeats([...selectedSeats,seat]);
        }
    };

    const totalPrice = selectedSeats.length * seatPrice;
    return (
         
        <div className="min-h-screen bg-gray-100 text-gray-900 py-10 px-4">
           <h1 className="text-4xl font-bold text-center mb-2">Select Your Seats</h1>
           <div className="w-full w-auto mx-auto bg-red-900 text-white rounded-xl p-2 shadow-xl mb-4"> 
                    <h2 className="text-xl font-bold text-center ">{theater?.name || "PVR Cinemas"}</h2>
                    <p className="text-white text-center mt-1 font-bold text-xl">Showdate: {showDate}
                    </p>

                    <p className="
                        text-white
                        text-center
                        mt-1
                        text-xl
                        font-bold
                    ">
                        Showtime: {showtime}
                    </p>

                    <p className="
                        text-white
                        text-center
                        font-bold
                        text-3xl
                        mt-2
                        mb-6
                    ">
                        {movie?.title}
                    </p>
                </div>
            

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
            
                <div className="w-full lg:w-[700px] bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
                    <div className="max-w-md mx-auto mb-10">
                          <div className="h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.7)]"></div>
                         <p className="text-center text-gray-400 mt-3">SCREEN</p>
                    </div>

                    <div className="
                        flex
                        flex-col
                        items-center
                        gap-3
                        overflow-x-auto
                    ">

                        {rows.map((row) => (

                            <div
                                key={row}
                                className="
                                    flex
                                    items-center
                                "
                            >

                                <span className="
                                    w-8
                                    text-gray-400
                                    font-bold
                                    text-center
                                ">
                                    {row}
                                </span>

                                <div className="flex">

                                    {Array.from(
                                        { length: seatsPerRow },
                                        (_, index) => {

                                            const seat =
                                                `${row}${index + 1}`;

                                            return (

                                                <Seat
                                                    key={seat}
                                                    seat={seat}
                                                    selected={
                                                        selectedSeats.includes(seat)
                                                    }
                                                    booked={
                                                        bookedSeats.includes(seat)
                                                    }
                                                    onClick={
                                                        handleSeatClick
                                                    }
                                                />

                                            );
                                        }
                                    )}

                                </div>

                                <span className="
                                    w-8
                                    text-gray-400
                                    font-bold
                                    text-center
                                ">
                                    {row}
                                </span>

                            </div>

                        ))}

                    </div>

                    <div className="
                        flex
                        justify-center
                        gap-8
                        mt-12
                        flex-wrap
                    ">


                        <div className="
                            flex
                            items-center
                            gap-2
                        ">
                            <div className="
                                w-5
                                h-5
                                bg-white
                                rounded
                            " />
                            <span>
                                Available
                            </span>
                        </div>
                        <div className="
                            flex
                            items-center
                            gap-2
                        ">

                            <div className="
                                w-5
                                h-5
                                bg-green-500
                                rounded
                            " />

                            <span>
                                Selected
                            </span>

                        </div>

                        <div className="
                            flex
                            items-center
                            gap-2
                        ">

                            <div className="
                                w-5
                                h-5
                                bg-gray-400
                                rounded
                            " />

                            <span>
                                Booked
                            </span>

                        </div>

                    </div>

                </div>
                <div className="
                    w-full
                    lg:w-[450px]
                    bg-gray-900
                    text-white
                    rounded-2xl
                    p-4
                    shadow-xl
                    lg:sticky
                    lg:top-10
                ">

                    <h2 className="
                        text-3xl
                        font-bold
                        mb-5
                    ">
                        🎟️ Booking Details
                    </h2>

                    <h3 className="
                        text-2xl
                        font-bold
                    ">
                        {movie?.title || "Movie"}
                    </h3>

                    <p className="
                        text-gray-500
                        mt-1
                    ">
                        {theater?.name || "PVR Cinemas"}
                    </p>


                    <hr className="my-4" />

                    <p className="mb-1">

                        <span className="font-bold">
                            Date:
                        </span>{" "}

                        {showDate}

                    </p>

                    <p>

                        <span className="font-bold">
                            Time:
                        </span>{" "}

                        {showtime}

                    </p>


                    <hr className="my-4" />


                    <p className="
                        text-lg
                        font-semibold
                        mb-2
                    ">
                        Selected Seats
                    </p>


                    <div className="
                        flex
                        flex-wrap
                        gap-2
                        mb-2
                    ">

                        {selectedSeats.length > 0 ? (

                            selectedSeats.map((seat) => (

                                <span
                                    key={seat}
                                    className="
                                        bg-green-100
                                        text-green-700
                                        px-4
                                        py-2
                                        rounded-lg
                                        font-medium
                                    "
                                >
                                    {seat}
                                </span>

                            ))

                        ) : (

                            <span className="text-gray-500">
                                No seats selected
                            </span>

                        )}

                    </div>


                    <hr className="my-6" />

                    <div className="
                        flex
                        justify-between
                        mb-3
                    ">

                        <span>
                            Price per seat
                        </span>

                        <span>
                            ₹{seatPrice}
                        </span>

                    </div>


                    <div className="
                        flex
                        justify-between
                        mb-3
                    ">

                        <span>
                            Total Seats
                        </span>

                        <span>
                            {selectedSeats.length}
                        </span>

                    </div>

                    <hr className="my-5" />

                    <div className="
                        flex
                        justify-between
                        items-center
                        mb-3
                    ">

                        <span className="
                            text-2xl
                            font-bold
                        ">
                            Total
                        </span>

                        <span className="
                            text-2xl
                            font-bold
                            text-red-600
                        ">
                            ₹{totalPrice}
                        </span>

                    </div>

                    <button
                        disabled={
                            selectedSeats.length === 0
                        }
                        onClick={() =>
                            navigate("/payment", {
                                state: {
                                    selectedSeats,
                                    totalPrice,
                                    movie,
                                    theater,
                                    showtime,
                                    showDate
                                }
                            })
                        }
                        className="
                            w-full
                            bg-red-600
                            hover:bg-red-700
                            disabled:bg-gray-400
                            disabled:cursor-not-allowed
                            text-white
                            py-4
                            rounded-xl
                            font-bold
                            text-lg
                            transition
                        "
                    >
                        Proceed to Payment
                    </button>

                </div>

            </div>

        </div>
    );
}

export default SeatSelection;