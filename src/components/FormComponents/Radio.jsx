import React from "react";

const Radio = ({ label, name, register }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="radio" {...register(name)} value="yes" /> Yes
      <input type="radio" {...register(name)} value="no" /> No
    </div>
  );
};

export default React.memo(Radio);
