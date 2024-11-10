import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoritetItems] = useState([]);
  const [serchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://672930f26d5fa4901b6c6fb4.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
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
    setCartItems((prev) => [...prev, obj]);
  };

  const handleDeleteFromCart = (obj) => {
    setCartItems((prev) => {
      return prev.filter((item) => item !== obj);
    });
  };

  const handleAddToFavorite = (obj) => {
    setFavoritetItems((prev) => [...prev, obj]);
  };

  const handleDeleteFavorite = (obj) => {
    setFavoritetItems((prev) => {
      return prev.filter((item) => item !== obj);
    });
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
              handleDeleteFromCart={handleDeleteFromCart}
              handleAddToFavorite={handleAddToFavorite}
              handleDeleteFavorite={handleDeleteFavorite}
              serchValue={serchValue}
              items={items}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              handleAddToCart={handleAddToCart}
              handleDeleteFromCart={handleDeleteFromCart}
              handleAddToFavorite={handleAddToFavorite}
              handleDeleteFavorite={handleDeleteFavorite}
              favoriteItems={favoriteItems}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
