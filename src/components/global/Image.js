import React from "react";

const Image = ({ source, padding, height, width }) => {
  return (
    <div style={{ padding: padding }}>
      <img src={source} alt="Image" style={{ width: width, height: height }} />
    </div>
  );
};

export default Image;
