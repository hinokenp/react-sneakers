import { Link } from "react-router-dom";

function Orders() {
  return (
    <main className="main">
      <div className="mainHeader">
        <h1>Мои заказы</h1>
      </div>
      <div className="mainWrapper">
        <div className="pageEpmty">
          <img width={70} height={70} src="/img/orders-emoji.png" alt=":(" />
          <div>
            <h3>У вас нет заказов</h3>
            <p>Вы нищеброд? Оформите хотя бы один заказ.</p>
            <Link to="/">
              <button>Вернуться назад</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Orders;
