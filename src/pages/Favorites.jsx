import Card from "../components/Card";

function Favorites({
  favoriteItems = [],
  handleAddToFavorite,
  handleDeleteFavorite,
  handleAddToCart,
  handleDeleteFromCart,
}) {
  return (
    <main className="main">
      <div className="mainHeader">
        <h1>Мои закладки</h1>
      </div>
      <div className="mainWrapper">
        {favoriteItems.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onAddToCart={() => handleAddToCart(item)}
              onDeleteFromCart={() => handleDeleteFromCart(item)}
              onAddToFavorite={() => handleAddToFavorite(item)}
              onDeleteFromFavorite={() => handleDeleteFavorite(item)}
              favorited={true}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Favorites;
