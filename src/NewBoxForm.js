import React, {useState} from "react";

function NewBoxForm ({addBox}) {
  const initialState = {
      height:"",
      width:"",
      backgroundColor:"",
  }
  const [formData,setFormData] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(formData=>({...formData,[name]:value}));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height-input">Height</label>
        <input id="height-input" name="height" onChange={handleChange}/>
        <label htmlFor="width-input">Width</label>
        <input id="width-input" name="width" onChange={handleChange}/>
        <label htmlFor="background-color-input">Background Color</label>
        <input id="background-color-input" name="color" onChange={handleChange}/>
        <button>Add a new box!</button>
      </form>
    </div>
  )

}

export default NewBoxForm