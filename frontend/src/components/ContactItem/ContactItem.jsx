import {AiOutlineDelete} from 'react-icons/ai'
import { Item, Button, Wrapper, Text } from "./ContactItem.styled";
import PropTypes from "prop-types";

// ----------REDUX---------------
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Contacts/operations";

export function Contact({ contact: { _id, name, phone } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(_id));
  return (
    <Item key={_id}>
      <Wrapper>
        <Text>{name}</Text>
        <Text>{phone}</Text>
      </Wrapper>
      <Button type="button" onClick={handleDelete}>
        <AiOutlineDelete size={24} color='#eaeaea' />
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
