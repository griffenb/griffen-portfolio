import React from "react";

const Text = ({
  base = "12px",
  mult = 1,
  color = "#fff",
  weight = "600",
  padding = "0",
  textAlign = "left",
  children,
}) => {
  const textStyle = {
    color: color,
    padding: padding,
    fontFamily: "Andika",
    fontStyle: "normal",
    lineHeight: "normal",
    textAlign: textAlign,
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
