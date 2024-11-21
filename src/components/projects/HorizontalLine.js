import React from "react";

const HorizontalLine = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "calc(100% - 40px)",
          maxWidth: "1200px",
          height: "2px",
          backgroundColor: "white",
        }}
      ></div>
    </div>
  );
};

export default HorizontalLine;
