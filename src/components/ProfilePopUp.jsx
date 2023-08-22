import React from "react";

function ProfilePopUp({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <p>Pop</p>
        <button onClick={onClose}>Închide</button>
      </div>
    </div>
  );
}

export default ProfilePopUp;
