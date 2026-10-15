
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <section>
            <h2>Корзина</h2>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Корзина пока пуста.</p>
                    <Link to="/">Перейти в каталог</Link>
                </div>
            ) : (
                <>
                    <div className="cart-list">
                        {cart.map((product, index) => (
                            <div className="cart-item" key={`${product.id}-${index}`}>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.price.toLocaleString("ru-RU")} ₽</p>
                                </div>

                                <button
                                    className="delete-button"
                                    onClick={() => removeFromCart(index)}
                                >
                                    Удалить
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <h3>
                            Итого: {total.toLocaleString("ru-RU")} ₽
                        </h3>
                        <Link to="/">Продолжить покупки</Link>
                    </div>
                </>
            )}
        </section>
    );
}

export default Cart;
