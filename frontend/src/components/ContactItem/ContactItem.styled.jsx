import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  border-radius: 20px;
  border: 2px solid var(--main, #bcbff2);
  color: #ffffff;

  transition: background-color 0.2s ease-out;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: #9886be;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px 15px 30px;
`;
export const Text = styled.p`
  margin: 0;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;
  transition: scale 0.1s ease-out;

  &:hover {
    scale: 1.2;
  }
`;
