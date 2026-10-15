
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
    { id: 1, name: "Наушники", price: 2500 },
    { id: 2, name: "Клавиатура", price: 3500 },
    { id: 3, name: "Мышь", price: 1500 },
    { id: 4, name: "Монитор", price: 15000 },
    { id: 5, name: "Веб-камера", price: 4000 }
];

function Catalog() {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    function handleAdd(product) {
        addToCart(product);
        navigate("/cart");
    }

    return (
        <section>
            <h2>Каталог товаров</h2>

            <div className="products">
                {products.map((product) => (
                    <article className="product-card" key={product.id}>
                        <div className="product-icon">🛍️</div>
                        <h3>{product.name}</h3>
                        <p className="price">{product.price.toLocaleString("ru-RU")} ₽</p>
                        <button onClick={() => handleAdd(product)}>
                            В корзину
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Catalog;
