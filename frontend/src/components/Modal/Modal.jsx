import { useState } from "react";
import { ModalWindow, Backdrop, Btn } from "./Modal.styled";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { useEffect } from "react";
const root = document.querySelector("#modal-root");

export function Modal({ togleModal }) {
  const [state, setState] = useState("login");
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        togleModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [togleModal]);

  const clickToBackDrop = (evt) => {
    if (evt.currentTarget === evt.target) {
      togleModal();
    }
  };
  return createPortal(
    <Backdrop onClick={clickToBackDrop}>
      <ModalWindow>
        <Btn onClick={() => togleModal()}>
          <AiOutlineClose />
        </Btn>
        <LoginForm handleChangeForm={setState("register")} />
      </ModalWindow>
    </Backdrop>,
    root
  );
}
