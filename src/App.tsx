import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import MiniCart from "./components/MiniCart/MiniCart";
import Home from "./pages/Home/Home";
import Categoria from "./pages/Categoria/Categoria";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novidades" element={<Categoria />} />
        <Route path="/homem" element={<Categoria />} />
        <Route path="/mulher" element={<Categoria />} />
        <Route path="/tenis" element={<Categoria />} />
        <Route path="/acessorios" element={<Categoria />} />
      </Routes>
      <MiniCart />
    </CartProvider>
  );
}

export default App;
