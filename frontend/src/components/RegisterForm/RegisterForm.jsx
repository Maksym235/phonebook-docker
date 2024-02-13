import {
  Form,
  Input,
  Btn,
  HaveAcc,
  ReRouteToLogin,
  Title,
} from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/Auth/authOperations";
export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      signUp({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Sign Up</Title>
      <Input
        label="login"
        type="text"
        name="name"
        placeholder="enter your login"
      />
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
      <Btn type="submit">Sign Up</Btn>
      <HaveAcc>Already have an account?</HaveAcc>
      <ReRouteToLogin to="/login">Log in</ReRouteToLogin>
    </Form>
  );
}
