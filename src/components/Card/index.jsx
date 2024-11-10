import { useState } from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [isFavorite, setIsFavorite] = useState(props.favorited);
  const [isAdded, setIsAdded] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      props.onAddToFavorite();
    } else {
      props.onDeleteFromFavorite();
    }
  };

  const handleClickPlus = () => {
    setIsAdded(!isAdded);
    if (!isAdded) {
      props.onAddToCart();
    } else {
      props.onDeleteFromCart();
    }
  };

  return (
    <div className={styles.card}>
      <button onClick={handleClickFavorite} className={`${styles.favorite}`}>
        <img
          // onClick={handleClickFavorite}
          width={14}
          height={14}
          src={
            isFavorite
              ? "/img/card-favorite-liked.svg"
              : "/img/card-favorite.svg"
          }
          alt="Favorite"
        />
      </button>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className={styles.price}>
        <div>
          <span>Цена</span>
          <p>
            <b>{props.price} руб.</b>
          </p>
        </div>
        <img
          onClick={handleClickPlus}
          className={styles.plus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Add"
        />
      </div>
    </div>
  );
}

export default Card;
