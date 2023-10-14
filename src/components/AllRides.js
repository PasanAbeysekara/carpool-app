import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllRides = () => {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get('http://localhost:3000/rides'); // Replace with your API endpoint
        setRides(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching rides:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };
    fetchRides();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Available Rides</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rides.length ? (
            rides.map((ride) => (
              <div key={ride._id} className="bg-white rounded-lg shadow-lg p-6">
                <h5 className="text-lg font-bold mb-2">Carpool Listing</h5>
                <p className="text-gray-700 text-sm mb-2">{ride.additionalInformation}</p>
                <p className="text-gray-700 text-sm mb-2">Departure Location: {ride.departureDetails.departureLocation}</p>
                <p className="text-gray-700 text-sm mb-2">Destination Location: {ride.destinationDetails.destinationLocation}</p>
                <p className="text-gray-700 text-sm mb-2">Price Per Seat: {ride.pricing.pricePerSeat}</p>
                <p className="text-gray-700 text-sm mb-2">Available Seats: {ride.availableSeats.numberOfAvailableSeats}</p>
                <Link
                  to={`/rides/${ride._id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p>No rides available at the moment. Check back later!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllRides;
