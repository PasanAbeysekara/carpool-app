import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RideDetails = () => {
  const { id } = useParams();
  const [ride, setRide] = useState(null);

  useEffect(() => {
    const fetchRide = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/rides/${id}`); // Replace with your API endpoint
        setRide(response.data);
      } catch (error) {
        console.error('Error fetching ride:', error);
      }
    };
    fetchRide();
  }, [id]);

  if (!ride) {
    return <div>Loading...</div>;
  }

  return (
    <div className="custom-container mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Ride Details</h2>
      <div className="bg-white shadow-md rounded p-8 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Driver:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.driver}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Departure Location:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.departureDetails.departureLocation}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Departure Date and Time:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.departureDetails.departureDateTime}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Destination Location:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.destinationDetails.destinationLocation}</p>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Estimated Arrival Time:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.destinationDetails.estimatedArrivalTime}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Additional Information:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.additionalInformation}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Price per Seat:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.pricing.pricePerSeat}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Available Seats:</p>
              <p className="text-gray-900 font-bold text-xl">{ride.availableSeats.numberOfAvailableSeats}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to={`/rides/${id}/create-request`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md focus:outline-none focus:shadow-outline"
            style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)' }}
          >
            Request a Seat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RideDetails;
