import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/Contacts/operations";
import { Outlet } from "react-router-dom";
import { Conteiner, NavBar, Link } from "./MobileContacts.styled";
const MobileContacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Conteiner>
      <NavBar>
        <Link to="myContacts">Contacts</Link>
        <Link to="addContact">add contact</Link>
      </NavBar>
      <Outlet />
    </Conteiner>
  );
};

export default MobileContacts;
