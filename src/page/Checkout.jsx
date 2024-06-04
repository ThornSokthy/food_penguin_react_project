import product from "../assets/product_imgs/product-img-1.jpg";
import { CartState } from "../context/ContextApi";

const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <main className=" flex-1 px-14 sm:px-20 md:px-24 lg:px-40 xl:px-60 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:mx-auto gap-8">
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold mb-5">
            Shopping Cart.
          </h1>
          <div className="">
            <div className="grid grid-cols-[60px_auto_50px_auto] items-center">
              <img src={product} className="w-16" />
              <div>
                <h2 className="text-sm md:text-base font-semibold">
                  Orange juice
                </h2>
                <span className="text-sm">$3.14</span>
              </div>
              <div className="flex gap-4">
                <button className="text-xl">
                  <i class="bx bx-minus"></i>
                </button>
                <span className="font-bold">2</span>
                <button className="text-xl">
                  <i class="bx bx-plus"></i>
                </button>
              </div>
              <button className="ml-4 text-2xl">
                <i class="bx bx-x"></i>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl font-semibold mb-4 ">
            Order Summary.
          </h1>
          <div className="border px-4 py-5 rounded-lg">
            <div className="flex justify-between mb-2 text-base md:text-sm lg:text-base">
              <h2>Items(3): </h2>
              <span>$32.75</span>
            </div>
            <div className="flex justify-between mb-2 text-base md:text-sm lg:text-base">
              <h2>Shipping: </h2>
              <span>$2.75</span>
            </div>
            <div className="flex justify-between mb-4 text-base md:text-sm lg:text-base text-red-600 font-semibold">
              <h2>Order total: </h2>
              <span>$34.75</span>
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
