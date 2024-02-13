import { Conteiner, Title, Text, InputSt, Icon } from "./FindInput.styled";

//---------------REDUX-------------
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/Contacts/filterSlice";
import { selectContacts } from "../../redux/Contacts/selectors";
export function Input() {
  const dispatch = useDispatch();
  const HandleChange = (evt) => dispatch(filterContacts(evt.target.value));
  const contacts = useSelector(selectContacts);
  if (contacts.length !== 0) {
    return (
      <Conteiner>
        <Title>Contacts</Title>
        <div style={{ position: "relative" }}>
          <InputSt
            style={{ position: "relative" }}
            type="text"
            name="find"
            onChange={HandleChange}
            placeholder="Search contacts"
          />
          <Icon size={24} color="#EAEAEA" />
        </div>
      </Conteiner>
    );
  }
  return (
    <Conteiner>
      <Title>Contacts</Title>
      <div style={{ position: "relative" }}>
        <InputSt
          style={{ position: "relative" }}
          type="text"
          name="find"
          onChange={HandleChange}
          placeholder="Search contacts"
        />
        <Icon size={24} color="#EAEAEA" />
      </div>
      <Text>
        Haven’t Contacts yet.
        <br />
        Add them right now!
      </Text>
    </Conteiner>
  );
}
