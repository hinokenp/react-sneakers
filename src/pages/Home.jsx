import Card from "../components/Card";

function Home({
  items,
  serchValue,
  isLoading,
  handleSearchValue,
  handleAddToCart,
  handleAddToFavorite,
}) {
  const renderItems = () => {
    const filteredItems = items.filter((obj) =>
      obj.title.toLowerCase().includes(serchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={item?.id || index}
        onAddToCart={() => handleAddToCart(item)}
        onAddToFavorite={() => handleAddToFavorite(item)}
        loading={isLoading}
        {...item}
      />
    ));
  };

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
      <div className="mainWrapper">{renderItems()}</div>
    </main>
  );
}

export default Home;
