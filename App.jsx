
import { NavLink, Routes, Route } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { useTheme } from "./context/ThemeContext";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  const { cart } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
      <div className={`app ${theme}`}>
        <header className="header">
          <h1>Shop</h1>

          <nav>
            <NavLink to="/" end>
              Каталог
            </NavLink>

            <NavLink to="/cart">
              Корзина ({cart.length})
            </NavLink>

            <NavLink to="/login">
              Вход
            </NavLink>

            <NavLink to="/dashboard">
              Кабинет
            </NavLink>
          </nav>

          <button onClick={toggleTheme}>
            {theme === "light" ? "Тёмная тема" : "Светлая тема"}
          </button>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
