import Card from "../Card";

function Order(props) {
  return (
    <div className="orderList">
      <p className="order__title">Заказ {props.id}</p>
      <div className="orderList__items">
        {props.items.map((item) => {
          return (
            <Card
              key={item.id}
              onAddToCart={() => props.handleAddToCart(item)}
              onAddToFavorite={() => props.handleAddToFavorite(item)}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Order;
