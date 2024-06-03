import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 sm:px-10 md:px-20 lg:px-52 xl:px-60 text-white flex justify-between items-center bg-slate-700 h-14 fixed left-0 right-0 top-0">
      <h2 className=" text-xl font-bold text-orange-400 flex items-center">
        <img src={Logo} className="w-16" srcset="" />
      </h2>
      <div className="flex items-center flex-1 ml-8 xl:ml-20 mr-8 xl:mr-20">
        <input
          className="w-[90%] py-2 px-4 rounded-s-md outline-none text-slate-800"
          type="search"
          placeholder="Search.."
        />
        <button className=" text-xl h-10  rounded-e-md bg-yellow-500 py-1 px-3">
          <i class="bx bx-search"></i>
        </button>
      </div>
      <div>
        <button className="text-2xl mr-3">
          <i class="bx bx-heart"></i>
        </button>
        <Link to="/cart">
          <button className="text-2xl">
            <i class="bx bx-cart"></i>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
