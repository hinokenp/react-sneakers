import { useContext, useState } from "react";
import { AppContext } from "../../context";
import styles from "./Cart.module.scss";
import CartItem from "../CartItem";
import Info from "../Info";

function Cart({ cartItems = [], onClose, onDeleteFromCart }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState();
  const { setCartItems, handleAddToOrder } = useContext(AppContext);

  const handleClickOrders = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });
      const data = await response.json();

      handleAddToOrder(data);
      setOrderId(data.id);
      setCartItems([]);
      setOrderComplete(true);
    } catch (error) {
      alert("Ошибка при создании заказа");
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <h2>Корзина</h2>
          <img onClick={onClose} src="/img/btn-close.svg" alt="" />
        </div>

        {cartItems.length ? (
          <>
            <div className={styles.cartList}>
              {cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onDelete={() => onDeleteFromCart(item)}
                  />
                );
              })}
            </div>
            <div className={styles.cartFooter}>
              <div className={styles.sum}>
                <p>Итого</p>
                <span></span>
                <p>
                  <b>21 496 руб.</b>
                </p>
              </div>
              <button disabled={isLoading} onClick={handleClickOrders}>
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <Info
            imgSrc={orderComplete ? "/img/order-complete.png" : "/img/box.png"}
            title={orderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              orderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            buttonText="Вернуться назад"
            onButtonClick={onClose}
          />
        )}
      </div>
    </>
  );
}

export default Cart;
