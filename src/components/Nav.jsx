const Nav = () => {
  return (
    <nav className="px-4 sm:px-10 md:px-20 lg:px-52 xl:px-60 py-[8px] border-b-2">
      <ul className="flex gap-6 overflow-x-auto no-scrollbar flex-1">
        <li className="text-slate-900 font-bold border-b-[3px] border-orange-600">
          Popular
        </li>
        <li>Coffees</li>
        <li>Tea</li>
        <li>Drinks</li>
        <li>Foods</li>
        <li>Rewards</li>
        <li>Tea</li>
        <li>Drinks</li>
        <li>Foods</li>
        <li>Rewards</li>
      </ul>
    </nav>
  );
};

export default Nav;
