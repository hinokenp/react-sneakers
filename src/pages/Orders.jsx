// import Card from "../components/Card";
import Info from "../components/Info";
import Order from "../components/Order";

function Orders({ orderItems = [], handleAddToCart, handleAddToFavorite }) {
  return (
    <main className="main">
      <div className="mainHeader">
        <h1>Мои заказы</h1>
      </div>
      <div className="mainWrapper">
        {orderItems.length ? (
          <div>
            {orderItems.map((order) => {
              return (
                <Order
                  key={order.id}
                  id={order.id}
                  items={order.items}
                  handleAddToCart={handleAddToCart}
                  handleAddToFavorite={handleAddToFavorite}
                />
              );
            })}
          </div>
        ) : (
          <Info
            imgSrc="/img/orders-emoji.png"
            title="У вас нет заказов"
            description="Вы нищеброд? Оформите хотя бы один заказ."
            buttonText="Вернуться назад"
            buttonLink="/"
          />
        )}
      </div>
    </main>
  );
}

export default Orders;
