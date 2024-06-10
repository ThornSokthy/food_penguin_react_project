import { CartState } from "../context/ContextApi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const {
    state: { products },
    seletedCat,
    setSelectedCat,
  } = CartState();

  const setCategories = () => {
    const cats = products.map((item) => item.cat);
    const categories = [
      "All",
      ...cats.filter((cat, index) => {
        return cats.indexOf(cat) === index;
      }),
    ];

    return categories;
  };

  const allCates = setCategories();

  return (
    <nav className="px-4 sm:px-10 md:px-20 lg:px-52 xl:px-60 py-[8px] border-b-2">
      <ul id="cats" className="flex gap-6 overflow-x-auto no-scrollbar flex-1">
        {allCates.map((cat) => (
          <li
            onClick={(e) => {
              setSelectedCat(e.target.textContent);
            }}
            className="text-slate-900 cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
