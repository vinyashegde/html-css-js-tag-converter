import React, { useState } from "react";
import "./App.css";

function HtmlConverter() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [conversionType, setConversionType] = useState("html");

  const convertText = () => {
    let convertedText = inputText;

    // Perform the appropriate conversion based on the selected type
    if (conversionType === "html") {
      convertedText = convertedText
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    } else if (conversionType === "css") {
      convertedText = convertedText.replace(/</g, "\\3c ");
    } else if (conversionType === "js") {
      convertedText = convertedText.replace(/</g, "\\u003c");
    }

    setOutputText(convertedText);
  };

  return (
    <div className="HtmlConverter">
      <h2>Tag Converter</h2>

      <div className="conversion-type">
        <label>
          <input
            type="radio"
            value="html"
            checked={conversionType === "html"}
            onChange={() => setConversionType("html")}
          />
          HTML
        </label>

        <label>
          <input
            type="radio"
            value="css"
            checked={conversionType === "css"}
            onChange={() => setConversionType("css")}
          />
          CSS
        </label>

        <label>
          <input
            type="radio"
            value="js"
            checked={conversionType === "js"}
            onChange={() => setConversionType("js")}
          />
          JavaScript
        </label>
      </div>

      <label htmlFor="inputText">Input Text:</label>
      <textarea
        id="inputText"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <br />

      <button onClick={convertText}>Convert</button>

      <br />

      <label htmlFor="outputText">Output Text:</label>
      <pre id="outputText">{outputText}</pre>
    </div>
  );
}

export default HtmlConverter;
