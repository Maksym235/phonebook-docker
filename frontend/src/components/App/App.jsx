//--------------REACT--------------
import { lazy, useEffect } from "react";
import { useMatchMedia } from "../hooks/useMatchMedia";

//--------------REDUX--------------
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/Auth/authOperations";
import { useAuth } from "../../components/hooks/useAuth";

//--------------COMPONENTS---------
import { Layout } from "../Layout/Layout";
import { Form } from "../FormToAddContact/FormToAddContact";
import { ContactList } from "../ContactsList/ContactsList";
//------------ROUTER-------------
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "../Routes/RestrictedRoute";
import { PrivateRoute } from "../Routes/PrivateRoute";
//---------------PAGES----------------
const HomePage = lazy(() => import("../../pages/Home/Home"));
const LoginPage = lazy(() => import("../../pages/Login/Login"));
const RegisterPage = lazy(() => import("../../pages/Register/Register"));
const ContactPage = lazy(() => import("../../pages/Contacts/Contacts"));
const VerifyPage = lazy(() => import("../../pages/Verify/Verify"));
const MobileContactsPage = lazy(() =>
  import("../../pages/MobileContacts/MobileContacts")
);
export default function App() {
  const { isMobile } = useMatchMedia();
  const dispatch = useDispatch();
  const { isRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefresh ? (
    <h5>Refreshing user, please wait...</h5>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/verify"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        {isMobile ? (
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<MobileContactsPage />}
              />
            }
          >
            <Route path="addContact" element={<Form />} />
            <Route path="myContacts" element={<ContactList />} />
          </Route>
        ) : (
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactPage />} />
            }
          />
        )}

        <Route
          path="/verify"
          element={<PrivateRoute redirectTo="/" component={<VerifyPage />} />}
        />
      </Route>
    </Routes>
  );
}
