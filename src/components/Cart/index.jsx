import styles from "./Cart.module.scss";
import CartItem from "../CartItem";

function Cart({ cartItems = [], onClose, onDeleteFromCart }) {
  console.log(cartItems);
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
              <div className="sum">
                <p>Итого</p>
                <span></span>
                <p>
                  <b>21 496 руб.</b>
                </p>
              </div>
              <div className="sum">
                <p>Налог 5%</p>
                <span></span>
                <p>
                  <b>1074 руб.</b>
                </p>
              </div>
              <button>Оформить заказ</button>
            </div>
          </>
        ) : (
          <div className={styles.cartEmpty}>
            <img src="/img/box.png" alt="" />
            <h3>Корзина пустая</h3>
            <p> Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose}>Вернуться назад</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
