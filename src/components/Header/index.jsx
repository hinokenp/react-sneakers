import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header(props) {
  // console.log(props);
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
            <b>1205 руб.</b>
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
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
