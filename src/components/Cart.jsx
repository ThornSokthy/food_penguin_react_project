const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="grid grid-cols-[60px_1fr_50px_1fr] mb-4 items-center">
      <img src={cart.image} className="w-16" />
      <div>
        <h2 className="text-sm md:text-base font-semibold">{cart.name}</h2>
        <span className="text-sm">
          ${(Math.round(cart.price) / 100).toFixed(2).replace(".", ",")}
        </span>
      </div>
      <span className=" text-[18px] font-semibold ml-14 sm:ml-6">
        {cart.qty}
      </span>
      <button
        onClick={() => {
          removeFromCart(cart);
        }}
        className="ml-24 text-2xl w-5"
      >
        <i className="bx bx-x"></i>
      </button>
    </div>
  );
};

export default Cart;
