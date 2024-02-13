import { Conteiner, Title, Description, Slogan, Btn } from "./HomeInfo.styled";
import { useAuth } from "../hooks/useAuth";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useMatchMedia } from "../hooks/useMatchMedia";
export function HomeInfo() {
  const { isMobile } = useMatchMedia();
  const { user } = useAuth();
  return (
    <Conteiner>
      <Title>All your contacts in one place</Title>
      <Slogan>
        Call U - Keep all your contacts in a safe place and easily share them
        with your friends
      </Slogan>
      <Description>
        A contact storage tool is a digital application designed to help users
        store, manage, and organize their contacts. With this tool, users can
        save their contacts&apos; information, such as names, phone numbers,
        email addresses, and social media profiles, in a centralized location.
      </Description>
      {user ? (
        <Btn to="/contacts">
          Get started {isMobile && <AiOutlineArrowRight size={24} />}
        </Btn>
      ) : (
        <Btn to="/register">
          Get started{isMobile && <AiOutlineArrowRight size={24} />}
        </Btn>
      )}
    </Conteiner>
  );
}
