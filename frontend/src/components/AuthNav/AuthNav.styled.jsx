import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Conteiner = styled.nav`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;

export const LogIn = styled(NavLink)`
  text-decoration: none;
  z-index: 1000;
  display: inline-flex;
  height: 49px;
  padding: 5px 59px;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: #000;
  color: #fff;
`;
