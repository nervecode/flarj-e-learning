import React from "react";
import "../components/styles/Colours.css";

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
  return (
    <div className="color-reviewer-container">
      <h1>Color Reviewer</h1>
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
                <div className="color-info">
                  <p className="color-name">{color.name}</p>
                  <p className="color-hex">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ColorReviewer;
