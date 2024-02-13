import {
  Form,
  Title,
  Input,
  Btn,
  HaventAcc,
  ReRouteToRegister,
} from "./LoginForm.styled";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/Auth/authOperations";
export function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Log in</Title>
      <Input
        label="email"
        type="email"
        name="email"
        placeholder="enter your email"
      />
      <Input
        label="password"
        type="password"
        name="password"
        placeholder="enter your password"
      />
      <Btn type="submit">Log In</Btn>
      <HaventAcc>Don’t have an account?</HaventAcc>
      <ReRouteToRegister to="/register">Register</ReRouteToRegister>
    </Form>
  );
}
