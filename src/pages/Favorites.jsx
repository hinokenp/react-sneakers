import Card from "../components/Card";
import Info from "../components/Info";

function Favorites({
  favoriteItems = [],
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
                {...item}
              />
            );
          })
        ) : (
          <Info
            imgSrc="/img/fav-sad.png"
            title="Закладок нет"
            description="Вы ничего не добавляли в закладки"
            buttonText="Вернуться назад"
            buttonLink="/"
          />
        )}
      </div>
    </main>
  );
}

export default Favorites;
