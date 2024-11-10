import Card from "../components/Card";

function Home({
  items,
  serchValue,
  handleSearchValue,
  handleAddToCart,
  handleDeleteFromCart,
  handleAddToFavorite,
  handleDeleteFavorite,
}) {
  return (
    <main className="main">
      <div className="mainHeader">
        <h1>{serchValue ? `Поиск по: "${serchValue}" ` : "Все кроссовки"}</h1>
        <div className="search">
          <img width={15} height={15} src="/img/search.svg" alt="Search" />
          <input
            onChange={handleSearchValue}
            type="text"
            placeholder="Поиск..."
            value={serchValue}
          />
        </div>
      </div>
      <div className="mainWrapper">
        {items
          .filter((obj) =>
            obj.title.toLowerCase().includes(serchValue.toLowerCase())
          )
          .map((item) => {
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
              />
            );
          })}
      </div>
    </main>
  );
}

export default Home;
