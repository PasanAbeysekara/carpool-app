import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RideDetails from './components/RideDetails';
import CreateRequest from './components/CreateRequest';
import PostForm from './components/PostForm';
import UserDashboard from './components/UserDashboard';
import AllRequests from './components/AllRequests';
import AllRides from './components/AllRides';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rides" element={<AllRides />} />
          <Route path="/rides/:id" element={<RideDetails />} />
          <Route path="/rides/:id/create-request" element={<CreateRequest />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/all-requests" element={<AllRequests />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
