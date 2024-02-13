import { Navigation } from "../Navigation/Navigation";
import {
  Conteiner,
  CloseBtn,
  Wrap,
  LogOut,
  WrapperContent,
} from "./BurgerMenu.styled";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/logo.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/authOperations";
export const BurgerMenu = ({ togleOpen }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const handleClose = () => {
    togleOpen();
  };
  return (
    <Conteiner>
      <WrapperContent>
        <CloseBtn onClick={handleClose}>
          <AiOutlineClose color="#bcbff2" size={35} />
        </CloseBtn>
        <Wrap>
          <img src={logo} alt="logo" />
        </Wrap>
        <Navigation togleOpen={togleOpen} />
        <LogOut type="button" onClick={handleLogOut}>
          Log out
        </LogOut>
      </WrapperContent>
    </Conteiner>
  );
};

BurgerMenu.PropTypes = {
  togleOpen: PropTypes.any,
};
