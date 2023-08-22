import React, { useState } from "react";
import SignUp from "@/components/SignUp";
import Login from "@/components/Login";
import UserPanel from "@/components/UserPanel";
import Homescreen from "@/components/Homescreen";

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("signup");
  const [showHomeScreen, setShowHomeScreen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setCurrentTab("userpanel");
    togglePopup();
  };

  const handleNextButton = () => {
    setCurrentTab("homescreen");
    setShowHomeScreen(true);
  };

  return (
    <div className="home-container">
      {currentTab === "signup" && (
        <div className="pt-8 text-center space-y-6">
          <SignUp setLoggedIn={setLoggedIn} />
          <button className="back__btn text-white" onClick={togglePopup}>
            Do you already have an account? Log In Now!
          </button>
        </div>
      )}

      {currentTab === "userpanel" && isLoggedIn && !showHomeScreen && (
        <UserPanel onNextButtonClick={handleNextButton} />
      )}

      {currentTab === "homescreen" && isLoggedIn && showHomeScreen && (
        <Homescreen />
      )}

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
