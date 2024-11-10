import styles from "./CartItem.module.scss";

function CartItem(props) {
  return (
    <div className={styles.cartItem}>
      <img width={70} height={70} src={props.imageUrl} alt="sneackers" />
      <div>
        <p>{props.title}</p>
        <span>
          <b>{props.price} руб.</b>
          <img src="/img/btn-close.svg" alt="delete" onClick={props.onDelete} />
        </span>
      </div>
    </div>
  );
}

export default CartItem;
