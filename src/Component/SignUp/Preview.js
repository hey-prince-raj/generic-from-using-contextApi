import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../FormContext";
export const Preview = () => {
  const { authentic, setAuthentic, formValue } = useContext(FormContext);
  const navigate = useNavigate();
  const [checkboxBool, setCheckboxBool] = useState(false);
  let inputValues = {};
  Object.values(formValue).forEach((inp) => {
    inputValues = { ...inputValues, [inp.name]: inp.value };
  });
  const {
    firstName,
    lastName,
    dob,
    organisation,
    textarea,
    email
  } = inputValues;
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckboxBool(true);
      return;
    }
    setCheckboxBool(false);
  };
  const SubmitHandler = () => {
    setAuthentic({ ...authentic, success: true });
    navigate("/signup/success", {
      replace: "/",
      state: { firstName, lastName }
    });
  };

  return (
    <>
      <div>Firstname:{firstName}</div>
      {lastName && <div>Lastname:{lastName}</div>}
      <div>DOB:{dob}</div>
      <div>Email:{email}</div>
      <div>
        Organisation:{organisation === "others" ? textarea : organisation}
      </div>
      <div className="form-input-wrapper">
        <input
          className="form-input checkbox"
          type="checkbox"
          id="form-tnc"
          data-form="form"
          name="checkbox"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="form-tnc" className="form-label">
          I have verified the data
        </label>
      </div>

      {checkboxBool && <button onClick={SubmitHandler}>Submit</button>}
    </>
  );
};
