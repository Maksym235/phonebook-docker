import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display flex;
  flex-direction: column;
  justify-content: center;
  column-gap:20px;
  gap: 50px;
  width: 320px;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 430px;
  }
`;
