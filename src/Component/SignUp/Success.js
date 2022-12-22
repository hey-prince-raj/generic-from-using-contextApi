import { useLocation } from "react-router-dom";
export const Success = () => {
  const { state } = useLocation();
  const { firstName, lastName } = state;
  return (
    <>
      <div>
        {firstName} {lastName} - Your profile has been registered successfully!"
      </div>
    </>
  );
};
