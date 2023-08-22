import React from "react";

function UserPanel({ onNextButtonClick }) {
  return (
    <div className="pt-8 text-center space-y-6">
      <h2>User Panel</h2>
      {/* ... alte componente sau conținut ... */}
      <button
        className="rounded bg-black h-8 w-[120px] text-white"
        onClick={onNextButtonClick}
      >
        Next
      </button>
    </div>
  );
}

export default UserPanel;
