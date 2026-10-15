
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        if (login.trim() !== "" && password.trim() !== "") {
            navigate("/dashboard");
        } else {
            alert("Заполните логин и пароль");
        }
    }

    return (
        <section className="login-section">
            <h2>Вход в аккаунт</h2>

            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="login">Логин</label>
                <input
                    id="login"
                    type="text"
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                    placeholder="Введите логин"
                />

                <label htmlFor="password">Пароль</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Введите пароль"
                />

                <button type="submit">Войти</button>
            </form>
        </section>
    );
}

export default Login;
