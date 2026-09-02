import { useLocation, useNavigate } from "react-router-dom";

function BookingSuccess() {

    const location = useLocation();
    const navigate = useNavigate();
    const bookingDateTime = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
     });

    const {
        selectedSeats = [],
        movie,
        theater,
        showtime,
        showDate,
        totalPrice=0
    } = location.state || {};

    const bookingId = "BK" + Math.floor(100000 + Math.random() * 900000);

    return (

        <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">

            <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">

                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-5xl text-black">✓</span>
                </div>

                <h1 className="text-3xl font-bold text-green-400">Payment Successful</h1>
                <p className="text-gray-400 mt-2">Your movie ticket has been booked successfully.</p>

                <div className="bg-gray-800 rounded-xl p-5 mt-7 text-left space-y-4">
                    <div className="flex justify-between">
                        <span className="text-gray-400">Booking ID</span>
                        <span className="font-bold text-cyan-400">{bookingId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Movie</span>
                        <span className="font-semibold">{movie?.title || "Movie"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Theater</span>
                        <span className="font-semibold">{theater?.name || "Theater"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Show Date</span>
                        <span className="font-semibold">{showDate || "01 September 2026"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400"> Show Time</span>
                        <span className="font-semibold">{showtime || "7:30 PM"}</span>
                    </div>
                    <div className="booking-row">
                        <p>Booking Date & Time</p>
                        <strong>{bookingDateTime}</strong>
                    </div>

                    <div>
                        <p className="text-gray-400 mb-2">Seats</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedSeats.map((seat) => (
                                <span key={seat}
                                    className="bg-cyan-500 text-black px-3 py-1 rounded-lg font-bold">{seat}
                                </span>
                            ))}
                        </div>
                    </div>
                        <hr className="border-gray-700" />
                        <div className="flex justify-between text-lg font-bold">
                           <span>Amount Paid</span>
                           <span className="text-green-400">₹{totalPrice}</span>
                        </div>

                    </div>

                <div className="flex gap-4 mt-7">
                    <button onClick={() => navigate("/")}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 py-3 rounded-lg font-bold">Home
                    </button>
                    <button
                        onClick={() => window.print()}
                        className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black py-3 rounded-lg font-bold">Print Ticket
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookingSuccess;