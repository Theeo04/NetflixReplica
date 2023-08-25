import React, { useState } from "react";
import ProfilePopUp from "./ProfilePopUp";
import { getAuth } from "firebase/auth"; // Asigurați-vă că importați getAuth din Firebase Authentication

function Nav() {
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setPopUpOpen(!isPopUpOpen);
  };

  const auth = getAuth();
  const user = auth.currentUser;

  let photoURL = ""; // Definim aici variabila pentru URL-ul pozei de profil

  if (user !== null) {
    user.providerData.forEach((profile) => {
      photoURL = profile.photoURL; // Actualizăm variabila cu URL-ul din profilul utilizatorului
    });
  }

  return (
    <div className={`p-5 w-full h-[115px] sm:h-[100px] z-10 relative`}>
      <div className="flex space-between">
        <img
          className="w-[160px] object-contain pl-5 pr-5 cursor-pointer"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="netflixLogo"
        />
        <div className="w-[1600px]"></div>
        <img
          className="w-[55px] h-[55px] cursor-pointer"
          src={photoURL}
          alt="navLogo"
          onClick={togglePopUp} // Apelăm togglePopUp la click pe logo
        />
      </div>
      <ProfilePopUp isOpen={isPopUpOpen} onClose={togglePopUp} />
    </div>
  );
}

export default Nav;
