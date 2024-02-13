import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Conteiner = styled.div`
  margin-top: 370px;
  margin-bottom: 20px;
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  @media (min-width: 768px) {
    margin: 0;
    width: 400px;
  }
  @media (min-width: 1280px) {
    margin: 0;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  margin: 0;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
`;

export const Slogan = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  display: flex;
  align-items: flex-end;
  letter-spacing: 0.01em;
  color: #ffffff;
  margin: 0;
`;

export const Description = styled.p`
  font-weight: 400;
  margin: 0;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #a6a6a6;
`;

export const Btn = styled(NavLink)`
  @media (max-width: 767px) {
    position: absolute;
    top: 275px;
    right: 0px;
    z-index: 999;
    border: 2px solid #1b1b1b;
    gap: 10px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 49px;
  margin-top: 20px;
  padding: 0;
  border: none;
  border-radius: 50px;
  background: #bcbff2;
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #000000;
`;
