import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RideDetails from './components/RideDetails';
import CreateRequest from './components/CreateRequest';
import PostForm from './components/PostForm';
import UserDashboard from './components/UserDashboard';
import AllRequests from './components/AllRequests';
import AllRides from './components/AllRides';
import LoginButton from './components/auth/LoginButton';
import LogoutButton from './components/auth/LogoutButton';
import ProfilePage from './components/auth/ProfilePage';
import ProfileButton from './components/auth/ProfileButton';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserDashboardButton from './components/UserDashboardButton';
import EditRequestPage from './components/EditRequestPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='bg-gradient-to-b from-indigo-50 to-indigo-100 flex flex-col min-h-screen'>
        <Navbar />
        <div className="App max-w-6xl mx-auto px-4 flex-1">
          {/* <LoginButton/>
          <LogoutButton/>
          <ProfileButton/>
          <UserDashboardButton/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProtectedRoute />}>
              <Route index element={<ProfilePage />} />
            </Route>
            <Route path="/rides" element={<AllRides />} />
            <Route path="/rides/:id" element={<RideDetails />} />
            <Route path="/rides/:id/create-request" element={<CreateRequest />} />
            <Route path="/postform" element={<PostForm />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/all-requests" element={<AllRequests />} />
            <Route path="/edit-request/:rideId" element={<EditRequestPage />} />
          </Routes>
        </div>
        <footer className="mt-auto bg-gray-800 w-full py-6 text-center">
          <p className="text-gray-300">&copy; 2023 GoTogether. All rights reserved.</p>
        </footer>

      </div>
      
    </Router>
  );
}

export default App;
