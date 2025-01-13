import React from "react";

const TextInput = ({ label, name, register }) => {
  return (
    <div>
        
      <label>{label}</label>
      <input type="text" {...register(name)} />
    </div>
  );
};

export default React.memo(TextInput);
