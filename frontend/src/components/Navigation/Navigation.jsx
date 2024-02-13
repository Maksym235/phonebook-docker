import { Conteiner, Link } from "./Navigation.styled";
export function Navigation({ togleOpen }) {
  const handleClick = () => {
    togleOpen();
  };
  return (
    <Conteiner>
      <Link onClick={handleClick} to="/">
        Home
      </Link>
      <Link onClick={handleClick} to="/contacts">
        Contacts
      </Link>
    </Conteiner>
  );
}
