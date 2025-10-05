import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div>
      <h1> QR Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value "
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            fontSize: "16px",
            marginRight: "10px",
          }}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
