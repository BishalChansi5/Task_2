export const generateJSONSchema = (formFields) => {
  return JSON.stringify(formFields, null, 2);
};
