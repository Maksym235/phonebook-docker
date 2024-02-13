import { Contact } from "../../components/ContactItem/ContactItem";
import { List } from "./ContactList.styled";
import { useContacts } from "../../components/hooks/useFilterContacts";

export function ContactList() {
  const contacts = useContacts();
  return (
    <List>
      {contacts &&
        contacts.map((contact) => {
          return <Contact key={contact._id} contact={contact} />;
        })}
    </List>
  );
}
