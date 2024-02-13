import styled from "@emotion/styled";

export const Header = styled.header`
  ${(prop) => {
    if (prop.isMobile) {
      return `;
justify-content: space-between;
    `;
    }
  }}

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
  display: flex;
  margin-bottom: 40px;
  padding-top: 10px;
  align-items: center;
`;

export const Logo = styled.svg`
  fill: #bcbff2;
`;

export const ModalBtn = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
`;
