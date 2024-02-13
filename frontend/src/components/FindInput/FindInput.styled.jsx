import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";
export const Conteiner = styled.div``;

export const Title = styled.h2`
  font-size: 40px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0.4px;
  margin: 0;
  margin-bottom: 40px;
  color: #fff;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #fff;
`;

export const InputSt = styled.input`
  position: relative;
  display: flex;
  width: 400px;
  padding: 17px 0px 17px 30px;
  margin-bottom: 20px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #adafdd;
  border: none;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #eaeaea;

  &::placeholder {
    color: #eaeaea;
  }
`;

export const Icon = styled(AiOutlineSearch)`
  position: absolute;
  top: 15px;
  left: 5px;
`;
