import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.nav`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #fff;
  background: #1b1b1b;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  color: #a6a6a6;
  font-family: Poppins;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  display: inline-flex;
  padding: 7px 28px;
  justify-content: center;
  align-items: center;
  border: none;

  &.active {
    color: #000;
    border-radius: 10px;
    background: #adafdd;
  }
`;
