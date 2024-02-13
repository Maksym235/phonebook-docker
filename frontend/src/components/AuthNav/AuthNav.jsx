import { Conteiner, LogIn } from "./AuthNav.styled";

export function AuthNav() {
  return (
    <Conteiner>
      <LogIn to="/login">Log In</LogIn>
    </Conteiner>
  );
}
