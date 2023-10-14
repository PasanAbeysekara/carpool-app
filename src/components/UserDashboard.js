import React, { Component } from 'react';

class UserDashboard extends Component {
    render(){
        return(
            <div>
                {/* <!-- User Dashboard --> */}
                <div className="container mt-5">
                    <h1 className="text-3xl font-bold mb-5">Welcome to Your Dashboard, [Placeholder Username]</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h5 className="text-xl font-bold mb-2">Profile Information</h5>
                            {/* <!-- Placeholder user information --> */}
                            <p className="mb-2">Name: [Placeholder Name]</p>
                            <p className="mb-2">Email: [Placeholder Email]</p>
                            <p className="mb-2">Contact Number: [Placeholder Contact Number]</p>
                            <a href="/edit-profile" className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit Profile</a>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h5 className="text-xl font-bold mb-2">My Requests</h5>
                            {/* <!-- Placeholder user listings --> */}
                            <p className="mb-2">You have [Placeholder Listing Count] active Requests.</p>
                            <a href="/all-requests" className="bg-blue-500 text-white px-4 py-2 rounded-md">View Requests</a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4 mt-5">
                        <h3 className="text-2xl font-bold mb-3">Account Settings</h3>
                        {/* <!-- Placeholder account settings options --> */}
                        <ul className="list-disc pl-5">
                            <li><a href="#">Change Password</a></li>
                            <li><a href="#">Notification Settings</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserDashboard;
