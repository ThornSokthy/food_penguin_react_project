import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./page/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen relative pt-16">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
