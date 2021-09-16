import React from "react";
import Color from "./color";
const ColorList = ({ colors }) => {
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color color={color.name} />
      ))}
    </div>
  );
};

export default ColorList;
