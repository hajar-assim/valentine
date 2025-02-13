import React, { useState, useEffect } from "react";
import "./ValentinePage.css";
import tulipImage from "./tulip.png";
import beeImage from "./bees.png";
import hurtSound from "./minecraft_hit.mp3";

export default function ValentinePage() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "102%", left: "43%" });


    useEffect(() => {
    const unlockAudio = () => {
        const silentAudio = new Audio();
        silentAudio.muted = true; // Create a muted sound
        silentAudio.play().then(() => {
        document.removeEventListener("click", unlockAudio);
        }).catch(error => console.log("Silent unlock failed:", error));
    };

    document.addEventListener("click", unlockAudio);
    }, []);


  const handleYesClick = () => {
    setAccepted(true);
  };

  const handleNoHover = () => {
  const buttonWidth = 120; // Button width
  const buttonHeight = 50; // Button height

  const screenWidth = window.innerWidth - buttonWidth;
  const screenHeight = window.innerHeight - buttonHeight;

  const newLeft = Math.random() * screenWidth;
  const newTop = Math.random() * screenHeight;

  setNoPosition({ top: `${newTop}px`, left: `${newLeft}px` });

  // Create and play sound only if the user has interacted with the page
  const audio = new Audio(hurtSound); // or use hurtSound if imported
  audio.volume = 0.5; // Optional: Adjust volume

  audio.play().catch((error) => {
    console.log("Audio play failed:", error);
  });
};


  return (
    <div className="valentine-container">
      {!accepted ? (
        <>
          <h1 className="valentine-title">will u be my valentine</h1>
          
          <img src={tulipImage} className="valentine-image" alt=""/>

          <div className="button-container">
            <button className="yes-button" onClick={handleYesClick}>
              yes ofc
            </button>
            <button
              className="no-button"
              onMouseEnter={handleNoHover}
              style={{ top: noPosition.top, left: noPosition.left }}
            >
              no
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="valentine-title">omg yay pookie see u tmr ly</h1>

          <img src={beeImage} className="bee-image" alt=""/>
        </>
      )}
    </div>
  );
}
