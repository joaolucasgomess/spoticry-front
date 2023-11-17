import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoHeader.png";
import {
  HeaderContainer,
  ButtonsContainer,
  Button,
  HeaderLogo,
} from "./Styles";
import { goToLoginPage, goToHomePage } from "../../routes/Coordinator";

export const Header = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  const logout = () => {
    localStorage.removeItem("token");
    goToHomePage(navigate);
  };
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo" />
      <ButtonsContainer>
        <Button onClick={login}>Entrar</Button>
        <Button onClick={logout}>Sair</Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
