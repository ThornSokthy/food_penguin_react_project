import React from "react";

const CardProduct = ({ product }) => {
  return (
    <div className=" bg-slate-200 py-5 px-4 rounded-md flex flex-col">
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
        <button className=" bg-black text-xl text-white px-5 pb-1 rounded-lg">
          +
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
