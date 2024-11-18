import { Link } from "react-router-dom";
import Card from "../components/Card";

function Favorites({
  favoriteItems = [],
  cartItems,
  handleAddToFavorite,
  handleAddToCart,
}) {
  return (
    <main className="main">
      <div className="mainHeader">
        <h1>Мои закладки</h1>
      </div>
      <div className="mainWrapper">
        {favoriteItems.length ? (
          favoriteItems.map((item) => {
            return (
              <Card
                key={item.id}
                onAddToCart={() => handleAddToCart(item)}
                onAddToFavorite={() => handleAddToFavorite(item)}
                added={cartItems.some(
                  (obj) => Number(obj.id) === Number(item.id)
                )}
                favorited
                {...item}
              />
            );
          })
        ) : (
          <div className="pageEpmty">
            <img width={70} height={70} src="/img/fav-sad.png" alt=":(" />
            <div>
              <h3>Закладок нет</h3>
              <p>Вы ничего не добавляли в закладки</p>
              <Link to="/">
                <button>Вернуться назад</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Favorites;
