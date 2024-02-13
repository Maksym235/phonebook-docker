import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { Header, ModalBtn } from "./AppBar.styled";
import logo from "../../../public/logo.svg";
import { useMatchMedia } from "../hooks/useMatchMedia";
import { useState } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
//--------------REDUX-------------
import { useAuth } from "../hooks/useAuth";
import { NavLink, useLocation } from "react-router-dom";
export function AppBar() {
  const [isOpen, setIsOpen] = useState(false);

  const togleOpen = () => {
    setIsOpen((state) => !state);
  };
  const { isMobile } = useMatchMedia();
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  if (pathname === "/verify") {
    return (
      <Header style={{ marginTop: "20px" }}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </Header>
    );
  }
  if (isMobile) {
    return (
      <>
        <Header isMobile>
          <ModalBtn onClick={togleOpen}>
            <GiHamburgerMenu color="#bcbff2" size={35} />
          </ModalBtn>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <ModalBtn>
            <FaUserCircle color="#bcbff2" size={35} />
          </ModalBtn>
        </Header>
        {isOpen && <BurgerMenu isOpen={isOpen} togleOpen={togleOpen} />}
      </>
    );
  }
  return (
    <Header>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
