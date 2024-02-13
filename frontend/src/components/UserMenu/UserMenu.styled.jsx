import styled from "@emotion/styled";

export const Conteiner = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
`;

export const Email = styled.p`
  z-index: 1000;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  ${({ page }) => {
    switch (page) {
      case "/":
        return `color: #000;`;
      case "/contacts":
        return `color: #fff;`;
    }
  }}
`;

export const Btn = styled.button`
  z-index: 1000;
  display: inline-flex;
  height: 49px;
  padding: 13px 59px;
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

  ${({ page }) => {
    switch (page) {
      case "/":
        return `color: #fff;
      background-color: #000;`;
      case "/contacts":
        return `color: #000;
        background-color: #bcbff2`;
    }
  }}
`;
