const Cart = ({ cart, dispatch }) => {
  return (
    <div className="grid grid-cols-[60px_auto_50px_auto] mb-4 items-center">
      <img src={cart.image} className="w-16" />
      <div>
        <h2 className="text-sm md:text-base font-semibold">{cart.name}</h2>
        <span className="text-sm">
          ${(Math.round(cart.price) / 100).toFixed(2).replace(".", ",")}
        </span>
      </div>
      <div className="flex gap-4">
        <button className="text-xl">
          <i class="bx bx-minus"></i>
        </button>
        <span className="font-bold">{cart.qty}</span>
        <button className="text-xl">
          <i class="bx bx-plus"></i>
        </button>
      </div>
      <button
        onClick={(e) => {
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: cart.id,
          });
        }}
        className="ml-24 text-2xl w-5"
      >
        <i class="bx bx-x"></i>
      </button>
    </div>
  );
};

export default Cart;
