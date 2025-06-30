import React from "react";
import GradientCard from "./ui/GradientCard";

function Profile() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0b0c2a]/100 backdrop-blur-sm flex items-center justify-center bg-cover bg-no-repeat bg-center"
    style={{
          // backgroundImage: "url('/src/assets/popupBg.png')", // ✅ Update path if needed
        }}>
      {/* Popup Container */}
        <GradientCard/>
    </div>
  );
}

export default Profile;
