import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CartState } from "../context/ContextApi";
import { useEffect, useState } from "react";

const Header = () => {
  const {
    state: { cart },
    search,
    setSearch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.qty;
      setTotal(total);
    });
  });

  return (
    <header className="px-4 sm:px-10 md:px-20 lg:px-52 xl:px-60 text-white z-20 flex justify-between items-center bg-slate-700 h-14 fixed left-0 right-0 top-0">
      <Link to="/">
        <img src={Logo} className="w-16" />
      </Link>
      <div className="flex items-center flex-1 ml-8 xl:ml-20 mr-8 xl:mr-20">
        <input
          className="w-[90%] py-2 px-4 rounded-s-md outline-none text-slate-800"
          type="search"
          placeholder="Search.."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className=" text-xl h-10  rounded-e-md bg-yellow-500 py-1 px-3">
          <i className="bx bx-search"></i>
        </button>
      </div>
      <div>
        <button className="text-2xl mr-3">
          <i className="bx bx-heart"></i>
        </button>
        <Link to="/cart">
          <button className="text-2xl relative">
            <i className="bx bx-cart"></i>
            <span className="order-count">{total}</span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
