import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Home from "./page/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className=" relative pt-16">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
