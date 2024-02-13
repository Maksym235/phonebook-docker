import styled from "@emotion/styled";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  align-items: center;
  @media (min-width: 768px) {
    width: 430px;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 10px;
  font-size: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0.4px;
  color: #fff;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-weight: 400;
  font-size: 18px;
`;

export const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 17px 0px 17px 30px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border: none;
  border-radius: 20px;
  background: #adafdd;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #eaeaea;
  &::placeholder {
    color: #eaeaea;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 310px;
  height: 49px;
  padding: 13px 59px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 50px;
  background-color: #bcbff2;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #000;

  transition: background-color 0.5s ease-out;

  &:hover {
    background-color: #bfa8ee;
  }
  @media (min-width: 768px) {
    width: 430px;
  }
`;
