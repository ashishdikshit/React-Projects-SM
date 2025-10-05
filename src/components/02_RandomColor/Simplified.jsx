import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  const generateColor = () => {
    if (colorType === "rgb") {
      const r = getRandomNumber(256);
      const g = getRandomNumber(256);
      const b = getRandomNumber(256);
      setColor(`rgb(${r}, ${g}, ${b})`);
    } else {
      const hexChars = "0123456789ABCDEF";
      let hex = "#";
      for (let i = 0; i < 6; i++) {
        hex += hexChars[getRandomNumber(16)];
      }
      setColor(hex);
    }
  };

  useEffect(() => generateColor(), [colorType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        color: "#fff",
        fontSize: "1.5rem",
      }}
    >
      <div>
        <button onClick={() => setColorType("hex")}>HEX</button>
        <button onClick={() => setColorType("rgb")}>RGB</button>
        <button onClick={generateColor}>Generate</button>
      </div>

      <div style={{ textAlign: "center" }}>
        <h3>{colorType.toUpperCase()} Color</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
