import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoritetItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [serchValue, setSearchValue] = useState("");
  const [cartDisplay, setCartDisplay] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await fetch(
          "https://67446a71b4e2e04abea21f70.mockapi.io/items"
        );
        const items = await itemsResponse.json();
        const ordersResponse = await fetch(
          "https://67446a71b4e2e04abea21f70.mockapi.io/orders"
        );
        const orderItems = await ordersResponse.json();

        setIsLoading(false);
        setItems(items);
        setOrderItems(orderItems);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!cartDisplay) {
      document.body.classList.add("modalOpened");
    }

    return () => {
      document.body.classList.remove("modalOpened");
    };
  }, [cartDisplay]);

  const handleCartDisplay = () => {
    setCartDisplay(!cartDisplay);
  };

  const handleAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => {
        return prev.filter((item) => Number(item.id) !== Number(obj.id));
      });
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const handleDeleteFromCart = (obj) => {
    setCartItems((prev) => {
      return prev.filter((item) => Number(item.id) !== Number(obj.id));
    });
  };

  const handleAddToFavorite = (obj) => {
    if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
      setFavoritetItems((prev) => {
        return prev.filter((item) => Number(item.id) !== Number(obj.id));
      });
    } else {
      setFavoritetItems((prev) => [...prev, obj]);
    }
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleAddBtn = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  const handleFavoriteBtn = (id) => {
    return favoriteItems.some((obj) => Number(obj.id) === Number(id));
  };

  const handleAddToOrder = (obj) => {
    setOrderItems((prev) => [...prev, obj]);
  };

  const totalPrice = cartItems.reduce((sum, current) => {
    return sum + +current.price;
  }, 0);

  return (
    <AppContext.Provider
      value={{
        totalPrice,
        setCartItems,
        handleAddBtn,
        handleFavoriteBtn,
        handleAddToCart,
        handleAddToFavorite,
        handleAddToOrder,
      }}
    >
      <div className="wrapper">
        <Cart
          onClose={handleCartDisplay}
          cartDisplay={cartDisplay}
          cartItems={cartItems}
          onDeleteFromCart={(obj) => handleDeleteFromCart(obj)}
        />

        <Header onOpen={handleCartDisplay} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleAddToCart={handleAddToCart}
                handleAddToFavorite={handleAddToFavorite}
                handleSearchValue={handleSearchValue}
                serchValue={serchValue}
                items={items}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                handleAddToCart={handleAddToCart}
                handleAddToFavorite={handleAddToFavorite}
                favoriteItems={favoriteItems}
              />
            }
          />
          <Route
            path="/orders"
            element={
              <Orders
                handleAddToCart={handleAddToCart}
                handleAddToFavorite={handleAddToFavorite}
                orderItems={orderItems}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
