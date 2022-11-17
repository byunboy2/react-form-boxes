import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";


function BoxList () {
  // set state for boxes
  const [boxes,setBoxes] = useState([]);

  // set state for the form
  const [formData, setFormData] = useState();

  // addBox, removeBox
  function addBox(formData) {
    const newBox = {...formData, id:uuid()};
    setBoxes(boxes=>[...boxes, newBox]);
  };

  function removeBox(id) {
    setBoxes(boxes=>boxes.filter(box=> box.id !== id))
  };

  return (
    <div>
      {boxes.map(
        box=>
        (<Box
        color={box.color}
        width={box.width+"px"}
        height={box.height+"px"}
        id = {box.id}
        removeBox={(evt)=>removeBox(box.id)} />))}
      <NewBoxForm addBox={addBox}/>
    </div>
  )
}

export default BoxList