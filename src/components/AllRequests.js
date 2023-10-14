import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function AllRequests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3000/requests")
            .then(res => {
                setRequests(res.data);
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }, []);

    function deleteRequest(id) {
        Axios.delete(`http://localhost:3000/requests/${id}`)
            .then(res => {
                setRequests(requests.filter(request => request.id !== id));
            })
            .catch(err => {
                console.error('Error:', err);
            });
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {requests.map(request => (
                <div key={request.id} className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{request.yourName}</h2>
                    <p className="text-gray-500 text-sm mb-2">{request.yourEmail}</p>
                    <p className="text-gray-900 text-base mb-2">{request.messageToDriver}</p>
                    <p className="text-gray-500 text-sm mb-4">Ride ID: {request.rideId}</p>
                    <button
                        onClick={() => deleteRequest(request.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default AllRequests;
