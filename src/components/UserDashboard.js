import React, { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";

class UserDashboard extends Component {
    render(){
        const { user, isAuthenticated } = this.props.auth0;

        return(
            <div>
                {/* <!-- User Dashboard --> */}
                <div className="container mt-5">
                    <h1 className="text-3xl font-bold mb-5">Welcome to Your Dashboard, {isAuthenticated ? user.name : 'Guest'}</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h5 className="text-xl font-bold mb-2">Profile Information</h5>
                            {/* <!-- Placeholder user information --> */}
                            <p className="mb-2">Name: {isAuthenticated ? user.name : 'Guest'}</p>
                            <p className="mb-2">Email: {isAuthenticated ? user.email : 'guest@example.com'}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h5 className="text-xl font-bold mb-2">My Requests</h5>
                            {/* <!-- Placeholder user listings --> */}
                            <p className="mb-2">You have [Placeholder Listing Count] active Requests.</p>
                            <a href="/all-requests" className="bg-blue-500 text-white px-4 py-2 rounded-md">View Requests</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withAuth0(UserDashboard);
