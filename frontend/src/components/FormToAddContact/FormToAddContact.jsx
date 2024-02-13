import { useState } from "react";
import { nanoid } from "nanoid";
import { FormStyled, Input, Button, Title } from "./FormToAddContact.styled";

// -------REDUX-----------------
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/Contacts/operations";
import { selectContacts } from "../../redux/Contacts/selectors";
export function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // --------------------------------------------
  const dispatch = useDispatch();

  const onHandlerChange = (evt) => {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;
      case "email":
        setEmail(evt.target.value);
        break;
      case "phone":
        setPhone(evt.target.value);
        break;

      default:
        return;
    }
  };
  const contacts = useSelector(selectContacts);

  const onFormSubmmit = (evt) => {
    evt.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <FormStyled onSubmit={onFormSubmmit}>
      <Title>Add contact</Title>

      <Input
        type="text"
        name="name"
        value={name}
        required
        placeholder="enter name"
        onChange={onHandlerChange}
      />

      <Input
        type="email"
        name="email"
        value={email}
        required
        placeholder="enter email"
        onChange={onHandlerChange}
      />

      <Input
        type="tel"
        name="phone"
        value={phone}
        required
        placeholder="enter number"
        onChange={onHandlerChange}
      />
      <Button>Add</Button>
    </FormStyled>
  );
}
