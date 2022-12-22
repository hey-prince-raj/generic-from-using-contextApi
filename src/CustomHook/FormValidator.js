import { useState, useContext } from "react";
import { FormContext } from "../FormContext";
import { validateInputValue } from "../FormComponent/ValidatorFunctions";
const useForm = (submitCallback) => {
  const { formValue, setFormValue } = useContext(FormContext);
  const [formError, setFormError] = useState({});
  const handleInputChange = (e) => {
    e.persist();
    const { name } = e.target;
    let value = e.type === "checkbox" ? e.target.checked : e.target.value;
    setFormValue({ ...formValue, [name]: { ...formValue[name], value } });
  };
  let errorContainer = {};
  const handleSubmit = (e) => {
    e && e.preventDefault();
    Object.values(formValue).forEach((value) => validateInput(value));
    !Object.values(errorContainer).length
      ? submitCallback()
      : setFormError({ ...errorContainer });
  };
  const validateInput = (input) => {
    const { validations, name, value } = input;
    let error = null;
    validations &&
      Object.entries(validations).every(([k, v]) => {
        error = validateInputValue(k, v, value);
        if (error) return false;
        return true;
      });
    if (error) errorContainer = { ...errorContainer, [name]: error };
    /*error && setFormError({ ...formError, [name]: error });*/
  };

  return { formError, handleInputChange, handleSubmit };
};
export default useForm;
