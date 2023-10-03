import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/Coordinator";

export const LoginPage = () =>{
    const navigate = useNavigate();

  const goHome = () => {
    goToHomePage(navigate);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>login página</p>
      <button onClick={goHome}>Home</button>
    </div>
  );
}