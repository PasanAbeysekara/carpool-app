// RideDetails.js
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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Ride Details</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p className="text-gray-700 text-sm">Driver:</p>
          <p className="text-gray-900 font-bold text-xl">{ride.driver}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-sm">Departure Location:</p>
          <p className="text-gray-900 font-bold text-xl">{ride.departureDetails.departureLocation}</p>
        </div>
        {/* Add more ride details here */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm">Departure Date and Time:</p>
          <p className="text-gray-900 font-bold text-xl">{ride.departureDetails.departureDateTime}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-sm">Destination Location:</p>
          <p className="text-gray-900 font-bold text-xl">{ride.destinationDetails.destinationLocation}</p>
        </div>
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
          <p className="text-gray-900 font-bold text-xl">{ride.additionalInformation}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-sm">Available Seats:</p>
          <p className="text-gray-900 font-bold text-xl">{ride.availableSeats.numberOfAvailableSeats}</p>
        </div>
        <Link to={`/rides/${id}/create-request`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Request a Seat
        </Link>
      </div>
    </div>
  );
};

export default RideDetails;
