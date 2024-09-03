// src/Arrow.js
import React from "react";

const Arrow = ({ length, angle, color }) => {
  // Calculate the end point of the arrow
  const radians = (angle * Math.PI) / 180;
  const x = length * Math.cos(radians);
  const y = length * Math.sin(radians);

  return (
    <svg
      width={length + 10}
      height={length + 10}
      style={{ overflow: "visible", zIndex: "2" }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill={color} />
        </marker>
      </defs>
      <line
        x1="0"
        y1="0"
        x2={x}
        y2={y}
        stroke={color}
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default Arrow;
