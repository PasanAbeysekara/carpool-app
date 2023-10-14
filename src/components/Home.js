import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goToRides = () => {
        navigate('/rides');
    }

    return (
        <div className="home-container bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">GoTogether</h1>
            <p className="text-lg text-gray-700 mb-8">Connecting Your Journeys</p>
            <button onClick={goToRides} className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded-lg text-2xl mb-8">Find a Ride</button>
            <div className="features mt-12 flex flex-wrap justify-center">
                <div className="feature p-6 m-4 bg-white rounded-lg shadow-md max-w-sm">
                    <img src="https://via.placeholder.com/150" alt="Share Ride" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-indigo-700 mb-2">Share Your Ride</h3>
                    <p className="text-gray-700 text-sm">Meet interesting people and split the costs by sharing your ride.</p>
                </div>
                <div className="feature p-6 m-4 bg-white rounded-lg shadow-md max-w-sm">
                    <img src="https://via.placeholder.com/150" alt="Eco-friendly" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-indigo-700 mb-2">Go Green</h3>
                    <p className="text-gray-700 text-sm">Reduce your carbon footprint by carpooling with others.</p>
                </div>
                <div className="feature p-6 m-4 bg-white rounded-lg shadow-md max-w-sm">
                    <img src="https://via.placeholder.com/150" alt="Save Money" className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-indigo-700 mb-2">Save Money</h3>
                    <p className="text-gray-700 text-sm">Cut down your travel expenses by sharing the ride with fellow travelers.</p>
                </div>
            </div>
            <div className="testimonials mt-12 flex flex-col items-center">
                <div className="testimonial text-center bg-white rounded-lg shadow-md p-6 mb-4 max-w-md">
                    <p className="text-gray-700 text-lg mb-4">"Finding rides has never been easier! I love how simple and convenient GoTogether makes carpooling."</p>
                    <p className="text-gray-800 font-bold">- Emily, A Happy Commuter</p>
                </div>
                <div className="testimonial text-center bg-white rounded-lg shadow-md p-6 mb-4 max-w-md">
                    <p className="text-gray-700 text-lg mb-4">"I've met some incredible people through this app. It's not just about sharing rides, it's about sharing experiences."</p>
                    <p className="text-gray-800 font-bold">- John, A Regular User</p>
                </div>
            </div>
            <footer className="mt-16 text-gray-600">
                <p>&copy; 2023 GoTogether. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;