import React, { useState } from "react";
import SignUp from "@/components/SignUp";
import Login from "@/components/Login";
import Homescreen from "@/components/Homescreen";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    togglePopup();
  };

  return (
    <div className="home-container">
      {!isLoggedIn && (
        <div className="pt-8 text-center space-y-6">
          <SignUp setLoggedIn={setLoggedIn} />
          <button className="back__btn text-white" onClick={togglePopup}>
            Do you already have an account? Log In Now!
          </button>
        </div>
      )}

      {isLoggedIn && <Homescreen />}

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <Login setLoggedIn={handleLogin} />
            <button className="mt-4" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
