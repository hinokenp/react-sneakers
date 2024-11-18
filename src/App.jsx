import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoritetItems] = useState([]);
  const [serchValue, setSearchValue] = useState("");
  const [cartDisplay, setCartDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://672930f26d5fa4901b6c6fb4.mockapi.io/items"
      );
      const items = await response.json();

      setIsLoading(false);
      setItems(items);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (cartDisplay) {
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
    console.log(obj);
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => {
        return prev.filter((item) => Number(item.id) !== Number(obj.id));
      });
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const handleDeleteFromCart = (obj) => {
    console.log(obj);
    setCartItems((prev) => {
      return prev.filter((item) => Number(item.id) !== Number(obj.id));
    });
  };

  const handleAddToFavorite = (obj) => {
    console.log(obj);
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

  return (
    <div className="wrapper">
      {cartDisplay && (
        <Cart
          onClose={handleCartDisplay}
          cartItems={cartItems}
          onDeleteFromCart={(obj) => handleDeleteFromCart(obj)}
        />
      )}
      <Header onOpen={handleCartDisplay} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSearchValue={handleSearchValue}
              handleAddToCart={handleAddToCart}
              handleAddToFavorite={handleAddToFavorite}
              serchValue={serchValue}
              items={items}
              cartItems={cartItems}
              favoriteItems={favoriteItems}
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
              cartItems={cartItems}
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
              cartItems={cartItems}
              favoriteItems={favoriteItems}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
