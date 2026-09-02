import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {

    const location = useLocation();
    const navigate = useNavigate();

    const {
        selectedSeats = [],
        movie,
        theater,
        showtime,
        showDate,
       totalPrice = 0
    } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState("upi");

    const [upiId, setUpiId] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const ticketPrice = totalPrice || 0;
    const convenienceFee = 30;
    const gst = Math.round(ticketPrice * 0.05);
    const grandTotal = ticketPrice + convenienceFee + gst;

    const handlePayment = () => {

    if (paymentMethod === "upi" && upiId.trim() === "") {
        alert("Please enter UPI ID");
        return;
    }

    if (paymentMethod === "card") {
        if (
            cardNumber.trim() === "" ||
            expiry.trim() === "" ||
            cvv.trim() === ""
        ) {
            alert("Please enter card details");
            return;
        }
    }
       const booking = {
    bookingId: "BK" + Math.floor(100000 + Math.random() * 900000),
    selectedSeats,
    movie,
    theater,
    showtime,
    showDate,
    totalPrice: grandTotal,
   bookingDateTime: new Date().toLocaleString()
};

const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

existingBookings.push(booking);

localStorage.setItem(
    "bookings",
    JSON.stringify(existingBookings)
);
   
    alert("Payment Successful! 🎉");
    // localStorage.removeItem("bookings");
navigate("/booking-success", {
    state: booking
}); 
   
    navigate("/booking-success", {
        state: {
            selectedSeats: selectedSeats,
        movie: movie,
        theater: theater,
        showtime: showtime,
        showDate:showDate,
        totalPrice: grandTotal
        }
    });
};

    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">

            <h1 className="text-5xl font-bold text-center text-cyan-400 mb-8">
                Payment
            </h1>
          
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
               
                <div className="bg-gray-900 rounded-2xl p-6 shadow-xl">

                    <h2 className="text-3xl font-bold mb-6 text-red-600">
                        Booking Details
                    </h2>

                    <div className="space-y-4">

                        <div>
                            <p className="text-gray-400">Movie</p>
                            <p className="text-lg font-semibold">
                                {movie?.title || "Movie"}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-400">Theater</p>
                            <p className="text-lg font-semibold">
                                {theater?.name || "Theater"}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-400">Show Date</p>
                            <p className="text-lg font-semibold">
                                {showDate || "01 September 2026"}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-400">Show Time</p>
                            <p className="text-lg font-semibold">
                                {showtime || "7:30 PM"}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-400">Selected Seats</p>

                            <div className="flex flex-wrap gap-2 mt-2">

                                {selectedSeats.length > 0 ? (
                                    selectedSeats.map((seat) => (
                                        <span
                                            key={seat}
                                            className="bg-cyan-500 text-black px-3 py-1 rounded-lg font-bold"
                                        >
                                            {seat}
                                        </span>
                                    ))
                                ) : (
                                    <span>No seats selected</span>
                                )}

                            </div>
                        </div>
                    
                    </div>

                </div>
                
                <div className="bg-gray-900 rounded-2xl p-6 shadow-xl">

                    <h2 className="text-2xl font-bold mb-6">Price Details</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="text-gray-400">Ticket Price</span>
                            <span>₹{totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">Convenience Fee</span>
                            <span>₹{convenienceFee}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-400">GST</span>
                            <span>₹{gst}</span>
                        </div>

                        <hr className="border-gray-700" />

                        <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span className="text-cyan-400">₹{grandTotal}</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mt-8 mb-5">Payment Method</h2>
                    <div className="space-y-3 flex  gap-10">
                        <label className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg cursor-pointer">
                            <input
                                type="radio"
                                value="upi"
                                checked={paymentMethod === "upi"}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <span>UPI</span>
                        </label>
                        <label className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg cursor-pointer">
                            <input
                                type="radio"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <span>Debit / Credit Card</span>
                        </label>

                        <label className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg cursor-pointer">
                            <input
                                type="radio"
                                value="netbanking"
                                checked={paymentMethod === "netbanking"}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <span>Net Banking</span>
                        </label>
                    </div>

                    {paymentMethod === "upi" && (

                        <div className="mt-5">
                            <label className="block mb-2">UPI ID</label>
                            <input
                                type="text"
                                placeholder="example@upi"
                                value={upiId}
                                onChange={(e) =>
                                    setUpiId(e.target.value)
                                }
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none focus:border-cyan-400"
                            />
                        </div>
                    )}

                    {paymentMethod === "card" && (

                        <div className="mt-5 space-y-4">

                            <input
                                type="text"
                                placeholder="Card Number"
                                value={cardNumber}
                                onChange={(e) =>
                                    setCardNumber(e.target.value)
                                }
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none focus:border-cyan-400"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={(e) =>
                                        setExpiry(e.target.value)
                                    }
                                    className="bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none focus:border-cyan-400"
                                />
                                <input
                                    type="password"
                                    placeholder="CVV"
                                    value={cvv}
                                    onChange={(e) =>
                                        setCvv(e.target.value)
                                    }
                                    className="bg-gray-800 border border-gray-700 rounded-lg p-3 outline-none focus:border-cyan-400"
                                />
                            </div>
                        </div>
                    )}

                    {paymentMethod === "netbanking" && (
                        <div className="mt-5">
                            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3">
                                <option>Select Bank</option>
                                <option>State Bank of India</option>
                                <option>Canara Bank</option>
                                <option>HDFC Bank</option>
                                <option>ICICI Bank</option>
                                <option>Axis Bank</option>
                                <option>Union Bank of India</option>
                                <option>Yes Bank</option>
                            </select>
                        </div>
                    )}
                    <button
                        onClick={handlePayment}
                        className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl text-lg transition"
                    >
                        Proceed to Pay ₹{grandTotal}
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Payment;