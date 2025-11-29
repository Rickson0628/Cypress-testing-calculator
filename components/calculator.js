
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "=") {
      try {
        // Evaluate the expression
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (value === "E") {
      setDisplay(display + "E"); // Added E 
    } else {
      // Append number/operator to display
      setDisplay(display === "0" ? value : display + value);
    }
  };

  // All buttons for the calculator
  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+",
    "C","E"
  ];

  return (
    <div style={{ maxWidth: "220px", margin: "20px auto", textAlign: "center" }}>
      <h1>Calculator</h1>
      <input
        id="display"
        type="text"
        value={display}
        readOnly
        style={{
          width: "100%",
          height: "40px",
          fontSize: "20px",
          marginBottom: "10px",
          textAlign: "right",
          paddingRight: "5px"
        }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "5px" }}>
        {buttons.map((btn) => (
          <button
            key={btn}
            id={`btn-${btn}`}
            onClick={() => handleClick(btn)}
            style={{ height: "50px", fontSize: "18px" }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
