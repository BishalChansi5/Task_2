import React from "react";

const FormPreview = ({ formData }) => {
  return (
    <div>
      <h3>Form Preview</h3>
      <pre>{JSON.stringify(formData)}</pre>
    </div>
  );
};

export default FormPreview;
