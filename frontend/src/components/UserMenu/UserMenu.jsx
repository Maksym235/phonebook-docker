import { Conteiner, Email, Btn } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/authOperations";
import { useAuth } from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
export function UserMenu() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Conteiner>
      <Email page={pathname}>{user.email}</Email>
      <Btn page={pathname} type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Btn>
    </Conteiner>
  );
}
