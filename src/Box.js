import React, {useState} from "react";

function Box ({color, width, height, removeBox}) {
  const style = {
    backgroundColor : color,
    width,
    height,
  };
  return (
    <div>
      <button onClick={removeBox}>
        Remove The Box!
      </button>
      <div style={style} className="Box">

      </div>
    </div>
  )
}

export default Box