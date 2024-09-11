import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="nav">
        <li>
          <img width={20} height={20} src="/img/cart.svg" alt="cart" />
          <span>
            <b>1205 руб.</b>
          </span>
        </li>
        <li>
          <img width={20} height={20} src="/img/favorite.svg" alt="favorite" />
          <span>Закладки</span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="user" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
