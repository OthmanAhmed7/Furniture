import { useState } from "react";
import Card from "./Card";
import FilterProducts from "./FilterProducts";
import { Loading } from "../global/Loading";
import useFetchData from "@/hooks/useFetchData";

const FeaturedProducts = ({ showNotify }) => {
  const { data: products, loading, error } = useFetchData();
  const [selectedProduct, setSelectedProduct] = useState("all");

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
  };

  const filteredItems =
    selectedProduct === "all"
      ? products
      : products.filter((product) => {
          return product?.category === selectedProduct;
        });

  return (
    <>
      <section className="pt-[5rem]">
        <div className="mb-[1.5rem] text-center">
          <h2 className="font-[700] sm:mb-[0.5rem] mb-[0.3rem] text-[1.8rem] leading-[1.3] sm:leading-[1.1] md:text-[2rem]">
            Featured Products
          </h2>
          <p className="text-[1.1rem] mb-[2rem]">
            Elevate Your Home with our Handpicked Favorites.
          </p>
        </div>

        <FilterProducts
          handleFilterChange={handleFilterChange}
          selectedProduct={selectedProduct}
        />

        <div className="max-w-[400px] mx-auto md:max-w-[1300px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2rem]">
          {loading ? (
            <Loading />
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            filteredItems.map((product) => {
              return (
                <Card
                  product={product}
                  key={product._id}
                  showNotify={showNotify}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
