import React from "react";
import "../Styles/Mainsection.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Home from "../Pages/Home";
import CreateToken from "../Pages/CreateToken";
import CreatePresales from "../Pages/CreatePresales";
import AllPreSales from "../Pages/AllPreSales";
import LockToken from "../Pages/LockToken";
import AllLockers from "../Pages/AllLockers";
import Leaderboard from "../Pages/Leaderboard";
import Guides from "../Pages/Guides";

const Mainsection = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Sidebar />
          <div className="main_section">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/create_token" 
                element={<CreateToken />} 
              />
              <Route
                path="/presales/create_preasles"
                element={<CreatePresales />}
              />
              <Route 
                path="/presales/all_preasles" 
                element={<AllPreSales />} 
              />
              <Route
                path="/liquidity_locker/lock_tocken"
                element={<LockToken />}
              />
              <Route
                path="/liquidity_locker/all_lockers"
                element={<AllLockers />}
              />
              <Route 
                path="/leaderboard" 
                element={<Leaderboard />} 
              />
              <Route 
                path="/guides" 
                element={<Guides />} 
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Mainsection;
