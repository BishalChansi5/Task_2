import React from "react";

const Select = ({ label, name, register }) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(name)}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
};

export default React.memo(Select);
