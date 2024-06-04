import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Checkout from "./page/Checkout";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className=" relative flex flex-col h-screen pt-16">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Checkout />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
