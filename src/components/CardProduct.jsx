import { useEffect, useState } from "react";

const CardProduct = ({ product, addToCart }) => {
  const [addSuccess, setAddSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAddSuccess(false);
    }, 2000);
  }, [addSuccess]);

  return (
    <div className=" bg-slate-200 pt-5 pb-8 px-4 rounded-md flex flex-col relative">
      <div className=" relative">
        <i className="fa-regular fa-heart absolute top-2 right-2 font-medium cursor-pointer"></i>
        <img className=" rounded-md" src={product.image} alt={product.name} />
      </div>
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <div className="flex-1"></div>
      <div className=" mt-3 flex justify-between">
        <p className="font-semibold">
          ${(Math.round(product.price) / 100).toFixed(2).replace(".", ",")}
        </p>
        <button
          onClick={() => {
            addToCart(product);
            setAddSuccess(true);
          }}
          className=" hover:bg-slate-800 active:bg-slate-700 bg-black text-xl text-white px-5 pb-1 rounded-lg pt-1"
        >
          +
        </button>
        {addSuccess && (
          <div className=" absolute bottom-2 left-4 text-green-600 flex items-center">
            <i class="bx bxs-check-circle"></i> Added
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
