import { FormEvent, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { StyledForm, StyledLoginForm } from "./styles";
import { api } from "../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading/loading";


export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      Email: e.currentTarget.email.value,
      Password: e.currentTarget.password.value,
    };

    const userData = await api.login(loginPayload);

    const id = userData.user.id;
    localStorage.setItem("id", id);

    setLoading(false);
    if (!userData) {
      setError(true);
      return;
    } else {
      navigate("/home/" + id);
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginForm>
          <h2>Welcome</h2>
          <StyledForm onSubmit={handleSubmit} error={error}>
            <input placeholder="Seu email" name="email" type="email" required />
            <div>
              <input
                placeholder="Sua senha"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <button type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <BsEyeSlashFill size={25} />
                ) : (
                  <BsEyeFill size={25} />
                )}
              </button>
            </div>
            <button className="glow-on-hover" type="submit">Login</button>
          </StyledForm>
        </StyledLoginForm>
      )}
    </>
  );
}
