import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { CartState } from "../context/ContextApi";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [amount, setAmount] = useState(0);

  const {
    state: { cart },
    removeFromCart,
  } = CartState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
    setShipping(cart.length > 0 ? 50 : 0);
  }, [cart]);

  useEffect(() => {
    setAmount(total + shipping);
  });

  return (
    <main className=" flex-1 px-14 sm:px-20 md:px-24 lg:px-40 xl:px-60 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:mx-auto gap-8">
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold mb-5">
            Shopping Cart.
          </h1>
          <div className="">
            {cart.length > 0 ? (
              cart.map((cart) => {
                return <Cart cart={cart} removeFromCart={removeFromCart} />;
              })
            ) : (
              <p>Cart empty..!</p>
            )}
          </div>
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold mb-4 ">
            Order Summary.
          </h1>
          <div className="border px-4 py-5 rounded-lg">
            <div className="flex justify-between mb-2 text-base md:text-sm lg:text-base">
              <h2>Items({cart.length}): </h2>
              <span>
                ${(Math.round(total) / 100).toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between mb-2 text-base md:text-sm lg:text-base">
              <h2>Shipping: </h2>
              <span>
                ${(Math.round(shipping) / 100).toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between mb-4 text-base md:text-sm lg:text-base text-red-600 font-semibold border-b-2 pb-3">
              <h2>Order total: </h2>
              <span>
                ${(Math.round(amount) / 100).toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div>
              <button className="py-1 px-4 bg-blue-500 text-white rounded-lg mr-2">
                ABA
              </button>
              <button className="py-1 px-4 bg-green-500 text-white rounded-lg mr-2">
                Wing
              </button>
            </div>
            <button className="mt-3 bg-yellow-500 w-full rounded-full text-white py-1">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
