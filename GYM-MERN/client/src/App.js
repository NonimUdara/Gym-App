import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import MemberDetails from './components/MemberDetails';
import UniqueDetail from './components/UniqueDetail';
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from './components/AdminPanel';
import ViewMessages from './components/ViewMessages';
import ViewRequests from './components/ViewRequests';
import ComeAndLeave from './components/ComeAndLeave';
import GymHome from './components/GymHome';
import TrainerPanel from './components/TrainerPanel';
import TrainerLogin from './components/TrainerLogin';

export default class App extends Component {
  render() {

    const user = localStorage.getItem("token");
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<GymHome />} />
            <Route path="/memberdetails" element={<MemberDetails />} />
            <Route path="/viewmessages" element={<ViewMessages />} />
            <Route path="/viewrequests" element={<ViewRequests />} />
            <Route path="/comeandleave" element={<ComeAndLeave />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/trainerpanel" element={<TrainerPanel />} />
            <Route path="/add" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<UniqueDetail />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/adminlogin" exact element={<AdminLogin />} />
            <Route path="/trainerlogin" exact element={<TrainerLogin />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};