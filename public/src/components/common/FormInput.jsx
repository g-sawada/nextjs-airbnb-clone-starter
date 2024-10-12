import React from "react";

const FormInput = ({name, type="text", value, setValue, placeholder, isListing}) => {
  
  return(
    <input 
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={e=>isListing ? setValue(name, e.target.value): setValue(e.target.value)
      } />
  )
};

export default FormInput;
