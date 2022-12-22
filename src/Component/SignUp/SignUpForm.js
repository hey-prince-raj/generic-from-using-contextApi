import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../FormContext";
import FormSample from "../../FormComponent/FormSample";
export const SignUPForm = () => {
  const { authentic, setAuthentic } = useContext(FormContext);
  const navigate = useNavigate();
  const submitCallback = () => {
    setAuthentic({ ...authentic, preview: true });
    navigate("/signup/preview");
  };
  return (
    <>
      <div className="form-Element">
        <FormSample
          title="SignUp Form"
          btnName="Preview"
          submitCallback={submitCallback}
        />
      </div>
    </>
  );
};
