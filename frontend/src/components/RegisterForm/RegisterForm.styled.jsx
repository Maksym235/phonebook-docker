import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
  padding: 143px 0px;
  margin: 0px auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 40px;
  line-height: 43px;
  letter-spacing: 0.01em;
  color: #1b1b1b;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 280px;
  padding: 17px 0px 17px 30px;
  gap: 10px;
  background: #adafdd;
  border-radius: 20px;
  border: none;

  &::placeholder {
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    color: #eaeaea;
  }

  @media (min-width: 768px) {
    width: 430px;
  }
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 59px;
  gap: 10px;
  width: 310px;
  height: 49px;
  background: #1b1b1b;
  border-radius: 50px;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 430px;
  }
`;

export const HaveAcc = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  color: #1b1b1b;
  margin: 0;
`;

export const ReRouteToLogin = styled(NavLink)`
  margin: 0;
  font-weight: 600;
  text-decoration: none;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #000000;
`;
