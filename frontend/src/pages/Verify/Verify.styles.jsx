import styled from "@emotion/styled";
import { MdAttachEmail } from "react-icons/md";
export const EmailIncon = styled(MdAttachEmail)`
  padding-top: 20px;
`;

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("assets/FormBg.jpg");
  background-size: cover;
  border-radius: 50px;
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
  }

  @media (min-width: 1280px) {
    width: 800px;
  }
`;

export const Title = styled.h2`
  color: #1b1b1b;
`;

export const Link = styled.a`
  dispay: flex;
`;

export const Text = styled.p`
  color: #1b1b1b;
  padding: 0px 20px;
  font-size: 24px;
`;
