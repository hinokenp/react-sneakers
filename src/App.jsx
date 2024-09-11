import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="mainHeader">
          <h1>Все кроссовки</h1>
          <div className="search">
            <img width={15} height={15} src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="mainWrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
