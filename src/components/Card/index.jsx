import { useState } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
  title,
  price,
  imageUrl,
  onAddToCart,
  onAddToFavorite,
  added,
  favorited = false,
  loading,
}) {
  const [isFavorite, setIsFavorite] = useState(favorited);
  const [isAdded, setIsAdded] = useState(added);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorite();
  };

  const handleClickPlus = () => {
    setIsAdded(!isAdded);
    onAddToCart();
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={265}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="200" height="155" />
          <rect x="0" y="167" rx="3" ry="3" width="200" height="18" />
          <rect x="0" y="187" rx="3" ry="3" width="100" height="18" />
          <rect x="0" y="234" rx="8" ry="8" width="80" height="48" />
          <rect x="170" y="225" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <button
            onClick={handleClickFavorite}
            className={`${styles.favorite}`}
          >
            <img
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
          <img width={133} height={112} src={imageUrl} alt="" />
          <p>{title}</p>
          <div className={styles.price}>
            <div>
              <span>Цена</span>
              <p>
                <b>{price} руб.</b>
              </p>
            </div>
            <img
              onClick={handleClickPlus}
              className={styles.plus}
              src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="Add"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
