import { CartState } from "../context/ContextApi";
import CardProduct from "./CardProduct";

const Products = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <main className="px-4 sm:px-10 md:px-20 lg:px-52 xl:px-60 mt-5">
      <h2 className=" mb-5 text-xl font-semibold">Poppular Products</h2>
      <section className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((pro) => {
          return <CardProduct product={pro} />;
        })}
      </section>
    </main>
  );
};

export default Products;
