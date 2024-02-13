//-----------REACT--------------
import { useEffect } from "react";

//-----------REDUX---------------
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/Contacts/operations";

//-----------COMPONENTS-------------
import { Form } from "../../components/FormToAddContact/FormToAddContact";
import { Input } from "../../components/FindInput/FindInput";
import { ContactList } from "../../components/ContactsList/ContactsList";

//-----------STYLES-----------------
import { Conteiner, Wrapper } from "./Contacts.styled";
export default function Contacts() {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchContacts());
  }, [dispach]);
  return (
    <Conteiner>
      <Form />
      <Wrapper>
        <Input />
        <ContactList />
      </Wrapper>
    </Conteiner>
  );
}
