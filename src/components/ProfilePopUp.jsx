import { getAuth, signOut } from "firebase/auth";
import React from "react";

function ProfilePopUp({ isOpen, onClose }) {
  const auth = getAuth();
  const user = auth.currentUser;

  let username = ""; // Definim variabilele aici în scop global
  let email = "";
  let photoURL = "";

  if (user !== null) {
    user.providerData.forEach((profile) => {
      username = profile.displayName;
      email = profile.email;
      photoURL = profile.photoURL;
    });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully.");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  if (!isOpen) {
    return null;
  }

  console.log(photoURL);

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="flex">
          <p className="pr-6 font-bold text-[16px]">Profile Picture: </p>
          <img
            className="h-[100px] w-[100px] rounded-lg"
            src={photoURL}
            alt="Profile"
          />
        </div>
        <div className="flex pt-3">
          <p className="font-bold text-[16px] pr-3">Username:</p>
          <p>{username}</p>
        </div>
        <div className="flex">
          <p className="font-bold text-[16px] pr-3">Email: </p>
          <p>{email}</p>
        </div>
        <div className="pt-[30px] flex space-x-[140px]">
          <button
            className="rounded bg-black h-8 w-[100px] text-white font-[500] rounded-xl"
            onClick={onClose}
          >
            Închide
          </button>
          <button
            onClick={handleSignOut}
            className="rounded bg-black h-8 w-[100px] text-white font-[500] rounded-xl"
          >
            Sign Out!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePopUp;
