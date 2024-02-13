import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 768px;
  height: 681px;
  background: #bcbff2;
  border-radius: 50px;
  animation: slide-in 1s ease-in-out forwards;
}

@keyframes slide-in {
  0% {
    right: -100%;
  }
  100% {
    left: 50%;
  }
}
`;

export const Btn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50px;
  right: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
