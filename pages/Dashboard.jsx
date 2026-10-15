
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <section className="dashboard">
            <h2>Личный кабинет</h2>
            <p>Добро пожаловать! Вход выполнен успешно.</p>
            <Link to="/">Перейти в каталог</Link>
        </section>
    );
}

export default Dashboard;
