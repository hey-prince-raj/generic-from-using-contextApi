import { useState } from "react";
import { FormContext } from "./FormContext";
import { Route, Routes, Navigate } from "react-router-dom";
import { SignUPIndex } from "./Component/SignUp/index";
import { SignUPForm } from "./Component/SignUp/SignUpForm";
import { Preview } from "./Component/SignUp/Preview";
import { Success } from "./Component/SignUp/Success";
import { formValuesSchema } from "./FormComponent/FormModal";
import "./styles.css";
const { Provider } = FormContext;
export default function App() {
  const [authentic, setAuthentic] = useState({
    preview: false,
    success: false
  });
  const [formValue, setFormValue] = useState(formValuesSchema);
  return (
    <Provider value={{ authentic, setAuthentic, formValue, setFormValue }}>
      <Routes>
        <Route path="/" element={<SignUPIndex />} />
        <Route path="signup">
          <Route index element={<SignUPForm />} />
          <Route path="form" element={<SignUPForm />} />
          {authentic.preview && <Route path="preview" element=<Preview /> />}
          {authentic.success && <Route path="success" element=<Success /> />}
          <Route path="*" element={<Navigate to="/signup/form" />} />
        </Route>
      </Routes>
    </Provider>
  );
}
