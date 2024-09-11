import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.card}>
      <button className={styles.favorite}>
        <img
          width={14}
          height={14}
          src="/img/card-favorite.svg"
          alt="Favorite"
        />
      </button>
      <img width={133} height={112} src="/img/sneackers/1.jpg" alt="" />
      <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className={styles.price}>
        <div>
          <span>Цена</span>
          <p>
            <b>12 999 руб.</b>
          </p>
        </div>
        <button className={styles.add}>+</button>
      </div>
    </div>
  );
}

export default Card;
