import React, { useState } from "react";
import "../components/styles/Colours.css";
import { useNavigate } from "react-router-dom";

const colors = [
  {
    label: "Primary Colors",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Green", hex: "#00FF00" },
      { name: "Blue", hex: "#0000FF" },
    ],
  },
  {
    label: "Secondary Colors",
    colors: [
      { name: "Yellow", hex: "#FFFF00" },
      { name: "Magenta", hex: "#FF00FF" },
      { name: "Cyan", hex: "#00FFFF" },
    ],
  },
  {
    label: "Tertiary Colors",
    colors: [
      { name: "Orange", hex: "#FF5733" },
      { name: "Chartreuse", hex: "#33FF57" },
      { name: "Dodger Blue", hex: "#33A6FF" },
      { name: "Deep Pink", hex: "#FF33A6" },
      { name: "Lime Green", hex: "#A6FF33" },
      { name: "Steel Blue", hex: "#33A6FF" },
    ],
  },
];

function ColorReviewer() {
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);
  const [showColorCodes, setShowColorCodes] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleColorCodes = () => {
    setShowColorCodes(!showColorCodes);
  };

  return (
    <div className="color-reviewer-container">
      <button onClick={() => navigate("/TouchPaint")}>TouchPaint</button>
      <button className="toggle-btn" onClick={toggleColorCodes}>
        {showColorCodes ? "Hide Color Codes" : "Show Color Codes"}
      </button>
      <button className="challenge-btn" onClick={toggleOptions}>
        Challenge
      </button>
      {showOptions && (
        <div className="options-container">
          <button onClick={() => navigate("/ColorGuessingGame")}>
            ColorGuessingGame
          </button>
          <button onClick={() => navigate("/ColorGuess")}>ColorGuess</button>
          <button onClick={() => navigate("/ColorCard")}>ColorCard</button>
        </div>
      )}
      <h1 className="color-rev-h1">Color Reviewer</h1>
      <div className="color-sections-row">
        {colors.map((section, index) => (
          <div key={index} className="color-section">
            <h2>{section.label}</h2>
            <div className="color-palette">
              {section.colors.map((color, idx) => (
                <div
                  key={idx}
                  className="color-box"
                  style={{ backgroundColor: color.hex }}
                >
                  {showColorCodes && (
                    <div className="color-info">
                      <p className="color-name">{color.name}</p>
                      <p className="color-hex">{color.hex}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorReviewer;
