import { useContext } from "react";
import { AppContext } from "../../context";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header(props) {
  const { totalPrice } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="nav">
        <li>
          <img width={20} height={20} src="/img/cart.svg" alt="cart" />
          <span onClick={props.onOpen}>
            <b>{totalPrice} руб.</b>
          </span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              width={20}
              height={20}
              src="/img/favorite.svg"
              alt="favorite"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={20} src="/img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
