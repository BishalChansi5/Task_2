import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "./FormComponents/TextInput";
import Select from "./FormComponents/Select";
import Radio from "./FormComponents/Radio";
import FormPreview from "./FormPreview";

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);

  const addField = (type) => {
    const name = `${type}-${formFields.length + 1}`;
    setFormFields([...formFields, { type, name, label: name }]);
  };

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h2>Interactive Form Builder</h2>
      <button onClick={() => addField("text")}>Add Text Input</button>
      <button onClick={() => addField("select")}>Add Select</button>
      <button onClick={() => addField("radio")}>Add Radio</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map((field, index) => {
          switch (field.type) {
            case "text":
              return <TextInput key={index} {...field} register={register} />;
            case "select":
              return <Select key={index} {...field} register={register} />;
            case "radio":
              return <Radio key={index} {...field} register={register} />;
            default:
              return null;
          }
        })}
        <button type="submit">Submit Form</button>
      </form>

      {formData && <FormPreview formData={formData} />}
    </div>
  );
};

export default FormBuilder;
