import React from "react";

const Text = ({
  base = "10px",
  mult = 1,
  color = "#fff",
  weight = "700",
  padding = "0",
  children,
}) => {
  const textStyle = {
    color: color,
    padding: padding,
    fontFamily: "Andika",
    fontStyle: "normal",
    lineHeight: "normal",
  };

  return (
    <div
      style={{
        ...textStyle,
        "font-weight": weight,
        "font-size": `calc(${base} + ${mult} * 1vw)`,
        "font-family": "Andika",
        "font-style": "normal",
        "line-height": "normal",
      }}
    >
      {children}
    </div>
  );
};

export default Text;
