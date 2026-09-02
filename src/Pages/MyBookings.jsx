
import { useEffect, useState } from "react";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        const savedBookings =
            JSON.parse(localStorage.getItem("bookings")) || [];

        setBookings(savedBookings);

    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">

            <h1 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                My Bookings
            </h1>

            {bookings.length === 0 ? (

                <div className="text-center mt-20">

                    <p className="text-gray-400 text-xl">
                        No bookings found
                    </p>
                    <p className="text-gray-500 mt-2">
                        Your booked movie tickets will appear here.
                    </p>

                </div>

            ) : (

                <div className="max-w-5xl mx-auto space-y-6">

                    {bookings.map((booking) => (

                        <div key={booking.bookingId} className="bg-gray-900 rounded-2xl p-6 shadow-xl">
                            <div className="flex flex-col md:flex-row gap-6">
                                <img
                                    src={booking.movie?.image}
                                    alt={booking.movie?.title}
                                    className="w-28 h-40 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>

                                            <h2 className="text-2xl font-bold text-white">
                                                {booking.movie?.title}
                                            </h2>

                                            <p className="text-gray-400 mt-1">
                                                {booking.movie?.genre}
                                            </p>

                                        </div>

                                        <span className="text-green-400 font-bold">
                                            ✓ Confirmed
                                        </span>

                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mt-5">

                                        <div>
                                            <p className="text-gray-500">
                                                Booking ID
                                            </p>

                                            <p className="font-semibold text-cyan-400">
                                                {booking.bookingId}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-gray-500">
                                                Theater
                                            </p>

                                            <p className="font-semibold">
                                                {booking.theater?.name}
                                            </p>
                                        </div>
                                        <div>
                                        <p className="text-gray-400">
                                             Show Date
                                        </p>

                                         <p className="font-semibold">
                                            {booking.showDate}
                                        </p>
                                           </div>

                                        <div>
                                            <p className="text-gray-500">
                                                Showtime
                                            </p>

                                            <p className="font-semibold">
                                                {booking.showtime}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-gray-500">
                                                Seats
                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-1">

                                                {booking.selectedSeats?.map(
                                                    (seat) => (
                                                        <span
                                                            key={seat}
                                                            className="bg-cyan-500 text-black px-2 py-1 rounded font-bold"
                                                        >
                                                            {seat}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-700 mt-5 pt-4 flex justify-between">

                                   <div>
                                      <p className="text-gray-500">Booking Date & Time</p>
                                      <p className="font-semibold">{booking.bookingDateTime}</p>
                                    </div>
                                   <div className="text-right">
                                      <p className="text-gray-500">Amount Paid</p>
                                      <p className="text-xl font-bold text-green-400">₹{booking.totalPrice}</p>
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}

export default MyBookings;

